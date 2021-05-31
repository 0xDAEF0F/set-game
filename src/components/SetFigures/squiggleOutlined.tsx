import React from 'react';

type Props = {
  color: string;
  quantity: number;
};

export default function SquiggleOutlined({ color, quantity }: Props) {
  const figure = (
    <svg
      width="25px"
      height="50px"
      viewBox="0 0 71 179"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Squiggle - Outlined</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M-47.2352869,90.2838303 C-53.7831507,104.329807 -48.1203966,120.391199 -37.0842515,120.391199 C-29.566053,121.011429 -24.0615644,119.332629 -14.0572253,114.467096 C-9.74118529,112.368023 -9.59727337,112.298943 -8.0048713,111.590683 C6.58930241,104.847806 18.9982173,103.697621 35.2882161,108.493854 C65.6071552,117.486718 82.5068887,119.842327 92.7887427,115.553703 C103.048223,111.274411 112.062837,100.96113 117.698562,88.552769 C123.603854,76.7297288 117.871441,58.5016854 107.520503,58.5016854 C97.1066484,58.5016854 88.6790684,61.4544493 78.5953444,67.2226544 C77.8919674,67.5386269 75.9238232,68.408121 75.8504218,68.4402612 C74.6990559,68.944409 73.7442935,69.3465315 72.7522969,69.7380315 C61.352544,74.2370419 49.5954608,75.1046052 34.1507612,70.3990298 C2.15236168,60.9080233 -9.74448024,59.1377087 -22.4893574,63.3904816 C-29.1903311,65.6264953 -33.9985469,68.9479447 -37.9023951,73.7383539 C-41.061593,77.6150033 -43.2574347,81.6560607 -47.2352869,90.2838303 Z M-41.0031602,71.2114475 C-36.6202394,65.8331687 -31.1757339,62.072179 -23.7554689,59.5961488 C-16.1979599,57.0743222 -8.26241898,56.6740477 1.60517356,58.1423989 C9.86422441,59.3713905 18.7299478,61.652836 35.3023739,66.5684203 C49.8471681,70.9997654 60.6856763,70.1999844 71.2838826,66.0173112 C72.2238266,65.6463542 73.1359662,65.2621834 74.2460109,64.7761289 C74.2984186,64.7531812 76.06442,63.9730025 76.7071869,63.6945954 C87.2986041,57.6482676 96.3138011,54.5016854 107.520503,54.5016854 C121.491973,54.5016854 128.324964,76.2293695 121.308854,90.2733251 C115.322806,103.456521 105.649465,114.523427 94.3285865,119.245435 C82.8558601,124.030779 65.40085,121.597771 34.1546083,112.329857 C18.8257642,107.816619 7.41047225,108.874705 -6.35303432,115.23357 C-7.90936366,115.926002 -8.05135499,115.994159 -12.3077817,118.06424 C-22.8797865,123.205854 -28.944177,125.061702 -37.1692767,124.390977 C-51.6508265,124.315325 -58.4662518,104.913904 -50.8660305,88.6052248 C-46.7517242,79.6817093 -44.4417918,75.4309899 -41.0031602,71.2114475 Z"
          id="Squiggle---Outlined"
          fill={color}
          fillRule="nonzero"
          transform="translate(35.043610, 89.512240) rotate(90.000000) translate(-35.043610, -89.512240) "
        />
      </g>
    </svg>
  );
  return (
    <>
      {Array(quantity)
        .fill(0)
        .map(() => figure)}
    </>
  );
}
