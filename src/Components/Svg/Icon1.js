import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function IconSvg(props) {
  return (
    <Svg
      style={{
        position: 'absolute',
        bottom: props.bottom,
        right: props.right,
        top: props.top,
        left: props.left,
      }}
      width={props.size ? props.size : '40'}
      height={props.size ? props.size : '40'}
      viewBox="0 0 500 500"
      {...props}>
      <G fill={ColorsName.SVGICON || `rgba(16,67,96,${props.opacity})`}>
        <Path
          d="M1500 4420c-792-50-1381-297-1480-620-20-63-21-88-18-640l3-575 32-68c117-246 517-444 1075-531 180-29 366-42 763-56 363-13 602-39 925-101 609-118 1149-324 1550-590 201-134 282-204 292-252 4-21 15-51 23-67 22-43 222-208 268-220 71-20 149 21 176 93 7 17 11 116 11 246 0 205-1 218-20 239-27 29-84 30-108 2-15-18-18-50-22-226l-5-206-80 67c-44 36-83 72-87 80-5 7-7 251-6 541l3 527 88-84 87-84v-171c0-158 2-172 20-192 28-30 82-30 110 1 20 21 21 30 18 212-3 187-3 191-30 237-16 25-41 57-57 70-15 13-60 51-99 85-84 73-130 90-188 70l-39-13-100 77c-205 157-429 289-678 398-123 55-196 84-377 149l-55 20-5 478-5 479-29 58c-140 275-624 484-1279 551-184 19-506 27-677 16zm666-165c414-43 765-147 981-291 296-197 253-418-117-604-491-247-1303-314-2030-170-436 87-746 242-826 413-13 29-24 70-24 92 0 109 120 239 307 334 403 203 1073 291 1709 226zM288 3285c194-124 493-221 849-275 189-28 333-39 673-50 168-5 368-16 445-25 992-106 1779-388 2315-828l70-58v-410c0-225-4-409-8-409s-47 29-96 65c-48 36-119 84-156 107l-68 43-4 121c-3 140-15 164-75 164-56 0-73-27-73-115 0-41-3-75-7-75-5 0-72 30-150 67l-143 68v122c0 119 0 122-26 142-35 28-69 26-99-4-23-22-25-32-25-113v-88l-160 54-160 54v118c0 116-1 119-26 139-35 27-57 26-91-3-26-23-28-30-31-118l-4-95-111 28c-62 15-138 32-169 39l-56 11-4 119c-4 136-15 160-76 160-62 0-72-19-72-136 0-57-3-105-7-107-5-2-83 8-175 22l-168 25v112c0 110-1 113-26 133-33 26-65 27-95 2-22-18-24-28-27-126l-4-108-51 6c-29 4-107 9-174 13l-123 7v104c0 97-2 106-25 128-30 31-71 32-102 3-21-20-23-30-23-125v-103h-113c-63 0-148 3-190 6l-77 7v114c0 108-1 115-25 138-30 31-77 33-105 5-18-18-20-33-20-131v-110l-47 7c-27 4-106 19-178 33l-130 26-5 138c-5 131-6 140-29 158-32 26-67 24-96-6-24-23-25-31-25-134v-111l-81 30c-45 16-112 44-148 62l-66 33-5 127c-4 110-8 130-25 147-32 31-75 31-105 1-16-16-20-33-20-92v-71l-26 24c-14 13-38 44-52 69l-27 45-3 395-3 395 33-32c18-17 66-52 106-78zm3048-392c-2-3-78 14-168 36-175 44-427 95-521 106-32 4-56 9-54 12 3 2 44 14 93 28 238 64 462 161 584 254l65 49 3-240c1-133 0-243-2-245z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
        <Path
          d="M1385 4074c-458-71-667-261-494-449 117-127 400-203 789-212 580-14 980 125 980 341 0 88-55 153-185 219-107 53-315 103-481 114-84 5-93 4-113-16-26-26-27-71-3-101 15-18 36-23 142-36 271-31 498-118 488-188-7-49-196-127-398-162-131-24-554-27-690-6-192 30-364 89-416 143-35 37-29 51 47 97 94 57 263 101 469 122 84 8 98 12 118 35 27 32 28 55 1 89-19 24-26 26-92 25-40-1-112-7-162-15z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </G>
    </Svg>
  );
}
