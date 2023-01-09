import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function SvgIcon3(props) {
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
      <Path
        d="M4120 5094c-47-21-147-117-677-647-343-342-630-636-638-653-27-58 22-124 82-109 19 4 234 212 663 641 596 594 638 634 670 634s60-25 387-353c324-324 353-355 353-386 0-29-13-47-92-128l-92-93-221 220c-197 196-225 220-253 220-41 0-82-38-82-77 0-22 41-68 222-250l223-223-92-92-92-92-104 102c-86 84-109 102-134 102-40 0-71-27-79-68-6-31-1-38 100-140l106-108-93-92-92-92-90 91c-101 102-134 122-177 107-33-12-48-35-48-75 0-22 21-49 102-130l103-103-93-92-92-93-212 212c-117 116-223 216-236 222-48 25-102-13-102-72 0-39 7-47 217-259l217-218-89-90-90-90-95 94c-107 106-131 120-176 101-34-14-44-31-44-76 0-25 19-49 100-133l99-102-77-77-77-77-387 387-387 387 79 81c86 89 101 121 76 161-43 65-96 50-201-56l-70-70-765 764c-820 818-794 795-931 831-84 23-221 19-300-8-180-61-301-188-354-372-13-45-16-83-13-164 6-116 24-176 77-259 17-26 368-384 781-797l750-750-815-815c-700-701-818-823-839-870-30-64-33-117-10-186 15-44 56-88 383-415C739 58 769 31 819 15c62-20 128-17 186 10 28 13 289 267 860 837l821 818 59-61c33-33 70-65 82-69 49-20 103 24 103 83 0 16-271 293-960 982l-960 960 105 105 104 104 74-71c40-40 86-75 101-79 54-13 105 38 92 92-4 15-39 61-79 101l-71 74 99 99c55 55 104 100 110 100 5 0 661-651 1458-1448l1447-1447-105-105-105-105-1248 1247c-717 717-1259 1252-1275 1258-59 21-118-38-97-97 6-16 541-558 1258-1275L4125 880l-105-105-105-105-385 385c-398 397-401 399-455 379-22-9-48-62-41-88 3-11 196-211 428-442l423-422 484-187c325-126 497-188 522-188 68 0 124 56 123 122 0 22-72 221-189 523l-190 488-597 597-598 598 815 815c700 701 818 823 839 870 30 64 33 117 10 186-15 44-56 88-383 415s-371 368-415 383c-69 23-122 20-186-10zM738 4868c66-25 118-67 264-215l118-118-268-268-268-268-147 150c-112 113-153 162-173 204-143 314 151 634 474 515zm597-548l100-100-268-268-267-267-102 103-103 102 265 265c146 146 267 265 270 265s50-45 105-100zm1158-2602l-77-77-102 99c-84 81-108 100-133 100-45 0-62-10-76-44-19-45-5-69 101-176l94-95-90-90-90-89-218 217c-212 210-220 217-259 217-59 0-92-45-72-98 5-15 105-123 222-240l212-212-93-92-92-93-103 103c-81 81-108 102-130 102-40 0-63-15-75-48-15-43 5-76 107-177l91-90-92-92-92-93-108 106c-102 101-109 106-140 100-41-8-68-39-68-79 0-25 18-48 102-134l102-104-92-92-92-92-223 223C825 859 779 900 757 900c-39 0-77-41-77-82 0-28 24-56 220-253l220-221-93-92c-81-79-99-92-128-92-31 0-62 29-386 353-328 328-353 355-353 387 0 33 48 83 817 852l818 818 387-387 388-388-77-77zM4684 677c81-209 145-381 143-384-3-2-176 62-386 144l-381 148 237 237c130 131 238 236 239 235s68-172 148-380z"
        transform="matrix(.1 0 0 -.1 0 512)"
        fill={ColorsName.SVGICON || `rgba(16,67,96,${props.opacity})`}
      />
    </Svg>
  );
}
