import React from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from 'next/image'


export function Header() {
  return <header className="fixed max-w-screen-xl m-auto left-0 right-0 top-0 p-4 pt-5 pb-5 z-10 w-full items-center justify-between font-mono text-sm lg:flex">
    <span className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/">
        <svg width="64" height="11" viewBox="0 0 64 11" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0869 4.1537H7.12387C7.10286 3.91018 7.04682 3.68928 6.95576 3.49099C6.8682 3.29269 6.74561 3.12223 6.58801 2.9796C6.4339 2.83349 6.24652 2.72217 6.02587 2.64564C5.80522 2.56562 5.5548 2.52562 5.27461 2.52562C4.78427 2.52562 4.36924 2.6439 4.02951 2.88046C3.69328 3.11701 3.4376 3.4562 3.26248 3.89801C3.09086 4.33982 3.00505 4.87034 3.00505 5.48956C3.00505 6.14358 3.09262 6.69149 3.26773 7.1333C3.44636 7.57163 3.70378 7.90212 4.04001 8.12476C4.37624 8.34393 4.78077 8.45351 5.25359 8.45351C5.52328 8.45351 5.76494 8.42046 5.97859 8.35436C6.19223 8.28479 6.37786 8.18564 6.53547 8.05693C6.69308 7.92821 6.82091 7.7734 6.91898 7.5925C7.02055 7.40813 7.08885 7.20114 7.12387 6.97154L10.0869 6.99241C10.0519 7.44466 9.92404 7.9056 9.70339 8.37524C9.48273 8.8414 9.16927 9.27277 8.76299 9.66936C8.36022 10.0625 7.86113 10.379 7.26572 10.6191C6.67031 10.8591 5.97859 10.9791 5.19055 10.9791C4.20287 10.9791 3.31677 10.7687 2.53223 10.3477C1.7512 9.92679 1.13302 9.30756 0.677713 8.49004C0.225904 7.67252 0 6.67236 0 5.48956C0 4.29981 0.231158 3.29791 0.693474 2.48387C1.15579 1.66635 1.77922 1.04886 2.56375 0.631404C3.34829 0.210468 4.22389 0 5.19055 0C5.87001 0 6.49519 0.0921884 7.06608 0.276565C7.63697 0.460942 8.13782 0.73055 8.56861 1.08539C8.9994 1.43675 9.34614 1.86986 9.60882 2.38472C9.8715 2.89959 10.0309 3.48925 10.0869 4.1537Z" />
          <path d="M21.3174 5.48956C21.3174 6.67932 21.0845 7.68295 20.6187 8.50047C20.1529 9.31452 19.5242 9.93201 18.7327 10.3529C17.9411 10.7704 17.0585 10.9791 16.0849 10.9791C15.1042 10.9791 14.2181 10.7687 13.4266 10.3477C12.6385 9.92331 12.0116 9.30408 11.5458 8.49004C11.0835 7.67252 10.8523 6.67236 10.8523 5.48956C10.8523 4.29981 11.0835 3.29791 11.5458 2.48387C12.0116 1.66635 12.6385 1.04886 13.4266 0.631404C14.2181 0.210468 15.1042 0 16.0849 0C17.0585 0 17.9411 0.210468 18.7327 0.631404C19.5242 1.04886 20.1529 1.66635 20.6187 2.48387C21.0845 3.29791 21.3174 4.29981 21.3174 5.48956ZM18.3124 5.48956C18.3124 4.84946 18.2266 4.31025 18.055 3.87192C17.8869 3.43011 17.6364 3.09614 17.3037 2.87002C16.9745 2.64042 16.5682 2.52562 16.0849 2.52562C15.6015 2.52562 15.1935 2.64042 14.8608 2.87002C14.5316 3.09614 14.2811 3.43011 14.1095 3.87192C13.9414 4.31025 13.8573 4.84946 13.8573 5.48956C13.8573 6.12967 13.9414 6.67062 14.1095 7.11243C14.2811 7.55076 14.5316 7.88473 14.8608 8.11433C15.1935 8.34045 15.6015 8.45351 16.0849 8.45351C16.5682 8.45351 16.9745 8.34045 17.3037 8.11433C17.6364 7.88473 17.8869 7.55076 18.055 7.11243C18.2266 6.67062 18.3124 6.12967 18.3124 5.48956Z" />
          <path d="M22.1511 10.833V0.14611H26.7953C27.5939 0.14611 28.2926 0.290481 28.8915 0.579222C29.4904 0.867964 29.9562 1.28368 30.289 1.82638C30.6217 2.36907 30.788 3.01961 30.788 3.77799C30.788 4.54333 30.6164 5.18865 30.2732 5.71395C29.9335 6.23925 29.4554 6.63583 28.839 6.9037C28.226 7.17157 27.5098 7.3055 26.6902 7.3055H23.9163V5.05123H26.1018C26.4451 5.05123 26.7375 5.00949 26.9792 4.926C27.2244 4.83903 27.4117 4.70161 27.5413 4.51376C27.6744 4.3259 27.741 4.08065 27.741 3.77799C27.741 3.47185 27.6744 3.22312 27.5413 3.03178C27.4117 2.83697 27.2244 2.69434 26.9792 2.60389C26.7375 2.50996 26.4451 2.463 26.1018 2.463H25.0721V10.833H22.1511ZM28.4555 5.92789L31.1453 10.833H27.9721L25.3453 5.92789H28.4555Z" />
          <path d="M37.3153 3.48577C37.2873 3.13789 37.156 2.86654 36.9213 2.67173C36.6901 2.47691 36.3382 2.37951 35.8653 2.37951C35.5641 2.37951 35.3172 2.41603 35.1246 2.48909C34.9354 2.55867 34.7953 2.65433 34.7043 2.77609C34.6132 2.89785 34.5659 3.037 34.5624 3.19355C34.5554 3.32226 34.5782 3.4388 34.6307 3.54317C34.6868 3.64405 34.7743 3.73624 34.8934 3.81973C35.0125 3.89975 35.1649 3.9728 35.3505 4.0389C35.5361 4.105 35.7568 4.16414 36.0124 4.21632L36.895 4.40417C37.4904 4.52941 38 4.69466 38.4238 4.89991C38.8476 5.10516 39.1944 5.34693 39.464 5.62524C39.7337 5.90006 39.9316 6.20968 40.0577 6.55408C40.1873 6.89848 40.2538 7.27419 40.2573 7.68121C40.2538 8.38393 40.077 8.97881 39.7267 9.46584C39.3765 9.95288 38.8756 10.3234 38.2242 10.5773C37.5762 10.8313 36.797 10.9583 35.8863 10.9583C34.9512 10.9583 34.1351 10.8208 33.4382 10.546C32.7447 10.2712 32.2053 9.84851 31.8201 9.27799C31.4383 8.70399 31.2457 7.96996 31.2422 7.0759H34.0161C34.0336 7.40291 34.1159 7.67774 34.263 7.90038C34.4101 8.12302 34.6167 8.29175 34.8829 8.40655C35.1526 8.52135 35.4731 8.57875 35.8443 8.57875C36.156 8.57875 36.417 8.54048 36.6271 8.46395C36.8372 8.38741 36.9966 8.28131 37.1052 8.14564C37.2138 8.00996 37.2698 7.85515 37.2733 7.68121C37.2698 7.51771 37.2155 7.37508 37.1104 7.25332C37.0089 7.12808 36.8407 7.01676 36.6061 6.91935C36.3714 6.81847 36.0545 6.72454 35.6552 6.63757L34.5835 6.40797C33.6308 6.20272 32.8795 5.86006 32.3297 5.37998C31.7833 4.89643 31.5119 4.23719 31.5154 3.40228C31.5119 2.72391 31.694 2.13077 32.0617 1.62287C32.433 1.11148 32.9461 0.713156 33.601 0.427894C34.2595 0.142631 35.0142 0 35.8653 0C36.7339 0 37.4852 0.144371 38.1191 0.433112C38.7531 0.721853 39.2416 1.12887 39.5849 1.65418C39.9316 2.176 40.1067 2.78653 40.1102 3.48577H37.3153Z" />
          <path d="M42.4688 11C42.0625 11 41.714 10.8591 41.4233 10.5773C41.1361 10.2921 40.9943 9.94592 40.9978 9.5389C40.9943 9.14232 41.1361 8.80313 41.4233 8.52135C41.714 8.23956 42.0625 8.09867 42.4688 8.09867C42.854 8.09867 43.1938 8.23956 43.488 8.52135C43.7857 8.80313 43.9363 9.14232 43.9398 9.5389C43.9363 9.81025 43.8645 10.0572 43.7244 10.2799C43.5878 10.4991 43.4092 10.6747 43.1885 10.8069C42.9679 10.9356 42.728 11 42.4688 11Z" />
          <path d="M50.756 3.48577C50.728 3.13789 50.5967 2.86654 50.362 2.67173C50.1308 2.47691 49.7788 2.37951 49.306 2.37951C49.0048 2.37951 48.7579 2.41603 48.5653 2.48909C48.3761 2.55867 48.236 2.65433 48.145 2.77609C48.0539 2.89785 48.0066 3.037 48.0031 3.19355C47.9961 3.32226 48.0189 3.4388 48.0714 3.54317C48.1275 3.64405 48.215 3.73624 48.3341 3.81973C48.4532 3.89975 48.6055 3.9728 48.7912 4.0389C48.9768 4.105 49.1974 4.16414 49.4531 4.21632L50.3357 4.40417C50.9311 4.52941 51.4407 4.69466 51.8645 4.89991C52.2883 5.10516 52.635 5.34693 52.9047 5.62524C53.1744 5.90006 53.3723 6.20968 53.4984 6.55408C53.628 6.89848 53.6945 7.27419 53.698 7.68121C53.6945 8.38393 53.5176 8.97881 53.1674 9.46584C52.8172 9.95288 52.3163 10.3234 51.6649 10.5773C51.0169 10.8313 50.2377 10.9583 49.327 10.9583C48.3919 10.9583 47.5758 10.8208 46.8789 10.546C46.1854 10.2712 45.646 9.84851 45.2608 9.27799C44.879 8.70399 44.6864 7.96996 44.6829 7.0759H47.4568C47.4743 7.40291 47.5566 7.67774 47.7037 7.90038C47.8508 8.12302 48.0574 8.29175 48.3236 8.40655C48.5933 8.52135 48.9138 8.57875 49.285 8.57875C49.5967 8.57875 49.8576 8.54048 50.0678 8.46395C50.2779 8.38741 50.4373 8.28131 50.5459 8.14564C50.6544 8.00996 50.7105 7.85515 50.714 7.68121C50.7105 7.51771 50.6562 7.37508 50.5511 7.25332C50.4496 7.12808 50.2814 7.01676 50.0468 6.91935C49.8121 6.81847 49.4952 6.72454 49.0959 6.63757L48.0241 6.40797C47.0715 6.20272 46.3202 5.86006 45.7704 5.37998C45.224 4.89643 44.9525 4.23719 44.956 3.40228C44.9525 2.72391 45.1347 2.13077 45.5024 1.62287C45.8737 1.11148 46.3868 0.713156 47.0417 0.427894C47.7002 0.142631 48.4549 0 49.306 0C50.1746 0 50.9259 0.144371 51.5598 0.433112C52.1937 0.721853 52.6823 1.12887 53.0256 1.65418C53.3723 2.176 53.5474 2.78653 53.5509 3.48577H50.756Z" />
          <path d="M54.2914 10.833V0.14611H57.2124V4.32068H61.079V0.14611H64V10.833H61.079V6.65844H57.2124V10.833H54.2914Z" />
        </svg>
      </Link>
    </span>
    <div className='flex gap-4'>
      <Link href='#example'>
        Example
      </Link>
      <Link href='#usage'>
        Usage
      </Link>
      <Link href='/playground'>
        Playground
      </Link>
    </div>
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className='flex gap-4 items-center'>
        <Link href='/pricing'>
          Pricing
        </Link>
        <Link href='/get-started'>
          <button className="bg-neutral-50 text-neutral-950 p-3 rounded-md">
            Get Started
          </button>
        </Link>

        <div style={{ width: 40 }} />
        <Link href="https://github.com/gridaco/cors.sh" target="_blank">
          <button>
            <GitHubLogoIcon />
          </button>
        </Link>
      </div>
    </div>
  </header>
}