import React from 'react';

function getIcon (icon) {
    switch (icon) {
        case '01d':
            return (
                <g>
                    <path fill="#FFCD00" d="M495,267.5v-40h-74.324c-3.799-33.108-16.904-63.424-36.634-88.257l52.61-52.61l-28.285-28.284 l-52.609,52.609c-24.834-19.731-55.15-32.835-88.257-36.634V0h-40v74.324c6.565-0.753,13.236-1.154,20-1.154v348.66 c-6.764,0-13.435-0.401-20-1.154V495h40v-74.324c33.107-3.799,63.423-16.904,88.257-36.634l52.609,52.609l28.285-28.284 l-52.61-52.61c19.731-24.833,32.835-55.149,36.634-88.257H495z"/>
                    <path fill="#FFDA44" d="M247.5,73.17c-6.764,0-13.435,0.401-20,1.154c-33.107,3.799-63.423,16.904-88.257,36.634 L86.634,58.349L58.349,86.633l52.61,52.61c-19.731,24.833-32.835,55.149-36.634,88.257H0v40h74.324 c3.799,33.108,16.904,63.424,36.634,88.257l-52.61,52.61l28.285,28.284l52.609-52.609c24.834,19.731,55.15,32.835,88.257,36.634 c6.565,0.753,13.236,1.154,20,1.154V73.17z"/>
                </g>
            );
        case '01n':
            return (
                <g>
                    <polygon fill="#FFDE55" points="434.477,227.821 478.869,178.66 414.058,164.981 381.022,107.57 381.022,266.658 441.496,293.688     "/>
                    <polygon fill="#FFEB99" points="347.986,164.981 283.175,178.66 327.568,227.821 320.55,293.688 381.022,266.658 381.022,107.57  "/>
                    <path fill="#FFEB99" d="M288.544,458.73c-90.69-22.63-160.01-108.71-160.01-211.23s69.32-188.6,160.01-211.23 c30.19-7.54,59.89-8.18,87.48-3.08C339.614,12.12,297.374,0,252.284,0c-136.7,0-247.5,110.81-247.5,247.5s110.8,247.5,247.5,247.5 c45.09,0,87.33-12.12,123.74-33.19C348.434,466.91,318.734,466.27,288.544,458.73z"/>
                    <path fill="#FFDE55" d="M252.284,247.5c0-91.59,49.79-171.51,123.74-214.31c-27.59-5.1-57.29-4.46-87.48,3.08 c-90.69,22.63-160.01,108.71-160.01,211.23s69.32,188.6,160.01,211.23c30.19,7.54,59.89,8.18,87.48,3.08 C302.074,419.01,252.284,339.09,252.284,247.5z"/>
                    <polygon fill="#FFDE55" points="490.216,342.579 457.992,335.777 441.565,307.228 441.566,386.332 471.637,399.771 468.144,367.021     "/>
                    <polygon fill="#FFEB99" points="425.138,335.777 392.914,342.579 414.987,367.022 411.498,399.771 441.566,386.332 441.565,307.228     "/>
                </g>
            );
        case '02d':
            return (
                <g>
                    <path fill="#BDDBFF" d="M238.063,88.063c-12.659,0-24.991,1.55-36.81,4.467c-55.463,13.693-99.559,57.644-112.534,114.336 C38.476,215.042,0,258.742,0,311.258c0,58.318,47.445,105.763,105.763,105.763h132.3V88.063z"/>
                    <path fill="#9BC9FF" d="M387.407,206.867c-15.739-68.772-77.271-118.804-149.343-118.804v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C444.9,230.467,418.394,211.909,387.407,206.867z"/>
                    <path fill="#FFCD00" d="M456.492,170.685c-2.5-11.828-7.17-22.864-13.573-32.672l20.069-20.069l-28.285-28.284 l-20.069,20.069c-9.808-6.403-20.843-11.073-32.672-13.573V67.813h-40v28.368c-10.252,2.174-20.11,6.001-29.145,11.328 c36.456,20.387,63.9,55.294,74.122,97.413l2.172,2.242c22.251,3.998,42.107,14.976,57.214,30.581 c4.713-8.46,8.135-17.58,10.14-27.061h28.368v-40H456.492z"/>
                </g>
            );
        case '02n':
            return (
                <g>
                    <path fill="#FFDE55" d="M362.958,149.034c11.435,16.047,19.877,34.437,24.449,54.414 c20.953,3.409,39.856,13.001,54.779,26.829c11.56-9.694,20.77-22.11,26.69-36.402c20.046-48.396-3.019-104.078-51.414-124.123 c-15.406-6.382-32.273-8.596-48.779-6.406l-34.26,4.546l21.012,27.44C367.174,110.663,370.02,131.159,362.958,149.034z"/>
                    <path fill="#2488FF" d="M238.063,84.644c-12.659,0-24.991,1.55-36.81,4.467c-55.463,13.693-99.559,57.644-112.534,114.336 C38.476,211.623,0,255.322,0,307.838c0,58.318,47.445,105.763,105.763,105.763h132.3V84.644z"/>
                    <path fill="#006DF0" d="M387.407,203.448c-15.739-68.772-77.271-118.804-149.343-118.804v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C444.9,227.047,418.394,208.49,387.407,203.448z"/>
                </g>
            );
        case '03d':
        case '03n':
            return (
                <g>
                    <path fill="#BDDBFF" d="M201.254,78.052c-55.463,13.693-99.559,57.644-112.534,114.336C38.476,200.564,0,244.263,0,296.779 c0,58.318,47.445,105.763,105.763,105.763h132.3V73.585C225.404,73.585,213.072,75.134,201.254,78.052z"/>
                    <path fill="#9BC9FF" d="M460.67,241.789c-15.77-25.801-42.276-44.359-73.263-49.401 c-15.739-68.772-77.271-118.804-149.343-118.804v328.958h132.3c58.318,0,105.763-47.445,105.763-105.763 C476.127,276.652,470.47,257.823,460.67,241.789z"/>
                </g>
            );
        case '04d':
        case '04n':
            return (
                <g>
                    <path fill="#57A4FF" d="M478.287,269.323C489.221,254.714,495,237.327,495,219.04c0-40.53-28.86-74.446-67.111-82.278 c-13.431-51.897-60.56-89.308-115.567-89.308c-49.282,0-93.286,30.531-111.068,75.603c11.818-2.918,24.15-4.467,36.81-4.467 c72.072,0,133.604,50.031,149.343,118.804c30.987,5.042,57.493,23.599,73.263,49.401 C467.304,281.923,473.238,276.07,478.287,269.323z"/>
                    <path fill="#BDDBFF" d="M238.063,118.589c-12.659,0-24.991,1.55-36.81,4.467C145.791,136.749,101.695,180.7,88.72,237.393 C38.476,245.568,0,289.267,0,341.783c0,58.318,47.445,105.763,105.763,105.763h132.3V118.589z"/>
                    <path fill="#9BC9FF" d="M387.407,237.393c-15.739-68.772-77.271-118.804-149.343-118.804v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C444.9,260.992,418.394,242.435,387.407,237.393z"/>
                </g>
            );
        case '09d':
        case '09n':
            return (
                <g>
                    <rect x="85.763" y="408.668" fill="#D1E7F8" width="40" height="64.77"/>
                    <path fill="#D1E7F8" d="M105.763,331.646c-6.837,0-13.521-0.66-20-1.905v42.004h40v-40.099H105.763z"/>
                    <rect x="173.963" y="331.646" fill="#D1E7F8" width="40" height="141.792"/>
                    <rect x="262.164" y="428.668" fill="#BDDBFF" width="40" height="44.77"/>
                    <rect x="262.164" y="331.646" fill="#BDDBFF" width="40" height="60.099"/>
                    <path fill="#BDDBFF" d="M238.063,2.689c-12.659,0-24.991,1.55-36.81,4.467C145.791,20.849,101.695,64.8,88.72,121.493 C38.476,129.668,0,173.367,0,225.883c0,58.318,47.445,105.763,105.763,105.763h132.3V2.689z"/>
                    <path fill="#BDDBFF" d="M370.364,331.646h-20v141.792h40V329.741C383.885,330.987,377.2,331.646,370.364,331.646z"/>
                    <path fill="#9BC9FF" d="M387.407,121.493C371.667,52.72,310.135,2.689,238.063,2.689v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C444.9,145.092,418.394,126.535,387.407,121.493z"/>
                </g>
            );
        case '10d':
            return (
                <g>
                    <rect x="88.845" y="426.23" fill="#D1E7F8" width="40" height="64.77"/>
                    <path fill="#D1E7F8" d="M108.846,349.208c-6.837,0-13.521-0.66-20-1.905v42.004h40v-40.099H108.846z"/>
                    <rect x="177.046" y="349.208" fill="#D1E7F8" width="40" height="141.791"/>
                    <rect x="265.247" y="446.23" fill="#BDDBFF" width="40" height="44.77"/>
                    <rect x="265.247" y="349.208" fill="#BDDBFF" width="40" height="60.099"/>
                    <path fill="#BDDBFF" d="M373.446,349.208h-20v141.791h40V347.303C386.968,348.548,380.283,349.208,373.446,349.208z"/>
                    <path fill="#BDDBFF" d="M241.146,20.25c-12.659,0-24.991,1.55-36.81,4.467c-55.463,13.693-99.559,57.644-112.534,114.336 c-50.244,8.175-88.72,51.875-88.72,104.391c0,58.318,47.445,105.763,105.763,105.763h132.3V20.25z"/>
                    <path fill="#9BC9FF" d="M390.489,139.054C374.75,70.282,313.218,20.25,241.146,20.25v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C447.983,162.654,421.477,144.096,390.489,139.054z" />
                    <path fill="#FFCD00" d="M459.575,102.872c-2.5-11.828-7.17-22.864-13.573-32.672l20.069-20.069l-28.285-28.284 l-20.069,20.069c-9.808-6.403-20.843-11.073-32.672-13.573V0h-40v28.368c-10.252,2.174-20.11,6.001-29.145,11.328 c36.456,20.387,63.9,55.294,74.122,97.413l2.172,2.242c22.251,3.998,42.107,14.976,57.214,30.581 c4.713-8.46,8.135-17.58,10.14-27.061h28.368v-40H459.575z"/>
                </g>
            );
        case '10n':
            return (
                <g>
                    <path fill="#FFDE55" d="M371.329,86.509c11.435,16.047,19.877,34.437,24.449,54.414 c20.953,3.409,39.856,13.001,54.779,26.829c11.56-9.694,20.77-22.11,26.69-36.402c20.046-48.396-3.019-104.078-51.414-124.123 c-15.406-6.382-32.273-8.596-48.779-6.406l-34.26,4.546l21.012,27.44C375.545,48.138,378.39,68.634,371.329,86.509z"/>
                    <path fill="#2488FF" d="M246.434,22.119c-12.659,0-24.991,1.55-36.81,4.467C154.161,40.279,110.065,84.23,97.091,140.922 c-50.244,8.175-88.72,51.875-88.72,104.391c0,58.318,47.445,105.763,105.763,105.763h132.3V22.119z"/>
                    <path fill="#006DF0" d="M395.777,140.922C380.038,72.15,318.506,22.119,246.434,22.119v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C453.271,164.522,426.764,145.964,395.777,140.922z"/>
                    <rect x="94.118" y="428.099" fill="#57A4FF" width="40" height="64.769"/>
                    <path fill="#57A4FF" d="M114.134,351.076c-6.842,0-13.532-0.661-20.016-1.908v42.008h40v-40.1H114.134z"/>
                    <rect x="182.318" y="351.076" fill="#57A4FF" width="40" height="141.792"/>
                    <rect x="270.518" y="351.076" fill="#2488FF" width="40" height="60.1"/>
                    <path fill="#2488FF" d="M378.734,351.076h-20.016v141.792h40V349.174C392.244,350.417,385.565,351.076,378.734,351.076z"/>
                </g>
            );
        case '11d':
        case '11n':
            return (
                <g>
                    <path fill="#ACABB1" d="M238.063,2.689c-12.659,0-24.991,1.55-36.81,4.467C145.791,20.849,101.695,64.8,88.72,121.493 C38.476,129.668,0,173.367,0,225.883c0,58.318,47.445,105.763,105.763,105.763h132.3V2.689z"/>
                    <path fill="#898890" d="M387.407,121.493C371.667,52.72,310.135,2.689,238.063,2.689v328.958h132.3 c58.318,0,105.763-47.445,105.763-105.763c0-20.127-5.657-38.956-15.457-54.99C444.9,145.092,418.394,126.535,387.407,121.493z"/>
                    <polygon fill="#FFDA44" points="155.455,473.438 115.455,473.438 115.455,368.646 155.13,368.646 155.13,331.646  195.13,331.646 195.13,408.646 155.455,408.646   "/>
                    <polygon fill="#FFCD00" points="273.024,473.438 233.024,473.438 233.025,368.646 272.7,368.646 272.701,331.646  312.701,331.646 312.7,408.646 273.025,408.646   "/>
                </g>
            );
        case '13d':
        case '13n':
            return (
                <g>
                    <polygon fill="#D1E7F8" points="227.5,0 227.5,50.11 202.642,25.252 174.358,53.536 227.5,106.678 227.5,212.859  135.545,159.769 116.093,87.175 77.457,97.528 86.555,131.484 43.159,106.429 23.159,141.071 66.555,166.125 32.599,175.224  42.951,213.861 115.545,194.41 207.5,247.5 115.545,300.59 42.951,281.139 32.599,319.776 66.555,328.875 23.159,353.929  43.159,388.571 86.555,363.516 77.457,397.472 116.093,407.825 135.545,335.231 227.5,282.141 227.5,388.322 174.358,441.464  202.642,469.748 227.5,444.89 227.5,495 247.5,495 247.5,0    "/>
                    <polygon fill="#BDDBFF" points="462.401,319.776 452.049,281.139 379.455,300.59 287.5,247.5 379.455,194.41  452.049,213.861 462.401,175.224 428.445,166.125 471.841,141.071 451.841,106.429 408.445,131.484 417.543,97.528 378.907,87.175  359.455,159.769 267.5,212.859 267.5,106.678 320.642,53.536 292.358,25.252 267.5,50.11 267.5,0 247.5,0 247.5,495 267.5,495  267.5,444.89 292.358,469.748 320.642,441.464 267.5,388.322 267.5,282.141 359.455,335.231 378.907,407.825 417.543,397.472  408.445,363.516 451.841,388.571 471.841,353.929 428.445,328.875     "/>
                </g>
            );
        default:
            return;
    }
}

export default function (props) {
    let iconSvg = getIcon(props.icon);

    return (
        <div style={{margin: "auto", width: '80%', height: '80%'}}>
            <svg height="100%" width="100%" viewBox="0 0 476.127 476.127" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                {iconSvg}
           </svg>
        </div>
    );
};

