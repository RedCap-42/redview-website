import {
  IconBuildingFactory2,
  IconLink,
  IconMapPin,
  IconMountain,
  IconRoute,
  IconSnowflake,
  IconUser,
  IconUserCircle,
} from '@tabler/icons-react';

import { type ContactColumnId } from '../types/contact-column-id';

export const HEADER_ICONS: Record<ContactColumnId, typeof IconUser> = {
  company: IconRoute,
  url: IconLink,
  createdBy: IconUserCircle,
  address: IconMapPin,
  accountOwner: IconUser,
  icp: IconSnowflake,
  arr: IconMountain,
  industry: IconBuildingFactory2,
};
