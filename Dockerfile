FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./
COPY packages/ ./packages/

RUN npm ci --legacy-peer-deps

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 -g nodejs nextjs

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/lingui.config.ts ./
COPY --from=builder /app/wyw-in-js.config.cjs ./

USER nextjs

EXPOSE 3002

CMD ["npm", "run", "start"]
