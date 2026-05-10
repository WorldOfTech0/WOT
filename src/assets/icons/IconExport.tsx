import {
  IconCode,
  IconCollege,
  IconDay,
  IconDownArrow,
  IconHome,
  IconHourcoding,
  IconMenu,
  IconNight,
  IconRobot,
} from './IconsAssets';

import { HourcodingIconProps, IconHc } from './types';

const HourcodingIcon = ({ icon, ...rest }: HourcodingIconProps) => {
  switch (icon) {
    case IconHc.CODE:
      return <IconCode {...rest} />;
    case IconHc.COLLEGE:
      return <IconCollege {...rest} />;
    case IconHc.DAY:
      return <IconDay {...rest} />;
    case IconHc.DOWN_ARROW:
      return <IconDownArrow {...rest} />;
    case IconHc.HOME:
      return <IconHome {...rest} />;
    case IconHc.HOURCODING:
      return <IconHourcoding {...rest} />;
    case IconHc.MENU:
      return <IconMenu {...rest} />;
    case IconHc.NIGHT:
      return <IconNight {...rest} />;
    case IconHc.ROBOT:
      return <IconRobot {...rest} />;
    default:
      return null;
  }
};

export default HourcodingIcon;
