"use client"
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

// Component
export default function Layout({ children }) {
  useEffect(() => {
    const inter = document.createElement('link');
    inter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
    inter.rel = 'stylesheet';
    document.head.appendChild(inter);
    
    return () => {
      document.head.removeChild(inter);
    };
  }, []);

  return (
    <>
    <html lang='en'>
      <Head>
        {/* Meta tags */}
        <meta name="theme-name" content="Pinwheel" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <meta name="generator" content="gulp" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>Pinwheel-tailwind</title>
        <meta name="robots" content="" />
        <meta name="description" content="meta description" />
        <meta name="author" content="{config.metadata.meta_author}" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/plugins/swiper/swiper-bundle.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/brands.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/solid.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/fontawesome.css" />
        <link href="/styles/main.css" rel="stylesheet" />
      </Head>
      
      <body>{children}
          
      <header className="header">
  <nav className="navbar container">
    {/* logo */}
    <div className="order-0">
      <Link href="/">
        <img src="/images/logo.svg" height="30" width="147" alt="logo" />
      </Link>
    </div>
    {/* navbar toggler */}
    <input id="nav-toggle" type="checkbox" className="hidden" />
    <label
      id="show-button"
      for="nav-toggle"
      className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
    >
      <svg className="h-6 fill-current" viewBox="0 0 20 20">
        <title>Menu Open</title>
        <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
      </svg>
    </label>
    <label
      id="hide-button"
      for="nav-toggle"
      className="order-2 hidden cursor-pointer items-center lg:order-1"
    >
      <svg className="h-6 fill-current" viewBox="0 0 20 20">
        <title>Menu Close</title>
        <polygon
          points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
          transform="rotate(45 10 10)"
        ></polygon>
      </svg>
    </label>
     {/* /navbar toggler */}
    <ul
      id="nav-menu"
      className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
    >
      <li className="nav-item">
        <Link href="" className="nav-link active">Home</Link>
      </li>
      <li className="nav-item">
        <Link href="/About" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link href="/Blog" className="nav-link">Blog</Link>
      </li>
      <li className="nav-item">
        <Link href="/Features" className="nav-link">Features</Link>
      </li>
      <li className="nav-item">
        <Link href="/how-it-works" className="nav-link">How It Works</Link>
      </li>
      <li className="nav-item nav-dropdown group relative">
        <span className="nav-link inline-flex items-center">
          Pages
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
        <ul
          className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
        >
          <li className="nav-dropdown-item">
            <Link href="/Career" className="nav-dropdown-link">Career</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/Career-single" className="nav-dropdown-link">Career Single</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/Integrations" className="nav-dropdown-link">Integrations</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/Integration-single" className="nav-dropdown-link">Integration Single</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/Pricing" className="nav-dropdown-link">Pricing</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/Changelogs" className="nav-dropdown-link">Changelogs</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link href="/terms-conditions" className="nav-dropdown-link">Terms & Conditions</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link href="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item mt-3.5 lg:hidden">
        <Link className="btn btn-white btn-sm border-border" href="/signin">Sing Up Now</Link>
      </li>
    </ul>
    <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
      <Link className="btn btn-white btn-sm" href="/Signin">Sing Up Now</Link>
    </div>
  </nav>
</header>


<footer className="footer bg-theme-light/50">
  <div className="container">
    <div className="row gx-5 pb-10 pt-[52px]">
      <div className="col-12 mt-12 md:col-6 lg:col-3">
        <Link href="/">
          <img src="/images/logo.svg" alt="" />
        </Link>
        <p className="mt-6">
          Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo
          tellus, sed condimentum volutpat.
        </p>
      </div>
      <div className="col-12 mt-12 md:col-6 lg:col-3">
        <h6>Socials</h6>
        <p>themefisher@gmail.com</p>
        <ul className="social-icons mt-4 lg:mt-6">
          <li>
            <Link href="#">
              <svg
                width="19"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"
                  fill="#222222"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3308 3.92621C17.0129 3.42889 17.6269 2.83209 18.1044 2.13583C17.4904 2.40108 16.7742 2.60001 16.0579 2.66632C16.8083 2.2353 17.354 1.5722 17.6269 0.743317C16.9447 1.14118 16.1603 1.43958 15.3758 1.60535C14.6937 0.909093 13.7728 0.51123 12.7496 0.51123C10.7714 0.51123 9.16837 2.06952 9.16837 3.99252C9.16837 4.25777 9.20248 4.52301 9.27069 4.78825C6.3034 4.62247 3.64307 3.22995 1.86952 1.14118C1.56256 1.63851 1.39202 2.2353 1.39202 2.8984C1.39202 4.09199 2.00595 5.15296 2.99504 5.7829C2.41523 5.74975 1.83541 5.61713 1.35792 5.35189V5.38504C1.35792 7.07596 2.58576 8.46847 4.22289 8.80002C3.95003 8.86633 3.60897 8.93265 3.302 8.93265C3.06326 8.93265 2.85862 8.89949 2.61987 8.86633C3.06326 10.2589 4.39342 11.2535 5.96233 11.2867C4.73449 12.215 3.19968 12.7786 1.52845 12.7786C1.22149 12.7786 0.948636 12.7455 0.675781 12.7123C2.24469 13.707 4.12057 14.2706 6.16698 14.2706C12.7496 14.2706 16.3308 8.99896 16.3308 4.39039C16.3308 4.22461 16.3308 4.09199 16.3308 3.92621Z"
                  fill="#222222"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.56609 15.2704V5.45315H0.948103V15.2704H4.56609ZM2.73764 4.1398C3.90474 4.1398 4.83841 3.31895 4.83841 2.33394C4.83841 1.38176 3.90474 0.59375 2.73764 0.59375C1.60945 0.59375 0.675781 1.38176 0.675781 2.33394C0.675781 3.31895 1.60945 4.1398 2.73764 4.1398ZM18.0654 15.2704H18.1044V9.8857C18.1044 7.259 17.4041 5.22331 13.7472 5.22331C11.9966 5.22331 10.8295 6.04415 10.3237 6.79933H10.2848V5.45315H6.82246V15.2704H10.4404V10.411C10.4404 9.13053 10.7128 7.91568 12.5801 7.91568C14.4475 7.91568 14.4864 9.36036 14.4864 10.5095V15.2704H18.0654Z"
                  fill="#222222"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svg
                width="19"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3829 10.554C15.4875 10.0381 15.5573 9.48523 15.5573 8.9324C15.5573 4.76772 12.3483 1.37701 8.40687 1.37701C7.88367 1.37701 7.36047 1.45072 6.87215 1.56129C6.20943 1.00846 5.37231 0.676758 4.50031 0.676758C2.33775 0.676758 0.59375 2.55639 0.59375 4.80458C0.59375 5.76282 0.87279 6.64735 1.39599 7.34761C1.29135 7.86359 1.22159 8.41642 1.22159 8.9324C1.22159 13.1339 4.43055 16.5246 8.37199 16.5246C8.89518 16.5246 9.41838 16.4509 9.9067 16.3404C10.5694 16.8932 11.4065 17.188 12.2785 17.188C14.4411 17.188 16.1851 15.3453 16.1851 13.0602C16.22 12.1388 15.9061 11.2543 15.3829 10.554ZM8.61615 13.9447C6.31407 13.9447 4.39567 12.8759 4.39567 11.5491C4.39567 10.9595 4.70959 10.4066 5.44207 10.4066C6.52335 10.4066 6.62799 12.0651 8.51151 12.0651C9.3835 12.0651 9.97646 11.6597 9.97646 11.1069C9.97646 10.4066 9.41838 10.2961 8.51151 10.0749C6.34895 9.48523 4.39567 9.2641 4.39567 6.86849C4.39567 4.65716 6.45359 3.84633 8.19759 3.84633C10.116 3.84633 12.0693 4.65716 12.0693 5.91024C12.0693 6.53679 11.6856 7.08962 11.0229 7.08962C10.0462 7.08962 10.0113 5.83653 8.40687 5.83653C7.49999 5.83653 6.94191 6.09452 6.94191 6.68421C6.94191 7.38446 7.67439 7.45818 9.34862 7.90044C10.7787 8.23214 12.5227 8.85869 12.5227 10.7383C12.5227 12.9128 10.5345 13.9447 8.61615 13.9447Z"
                  fill="#222222"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-12 mt-12 md:col-6 lg:col-3">
        <h6>Quick Links</h6>
        <ul>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/">Category</Link>
          </li>
          <li>
            <Link href="/">Testimonial</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="col-12 mt-12 md:col-6 lg:col-3">
        <h6>Location & Contact</h6>
        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
        <p>(704) 555-0127</p>
      </div>
    </div>
  </div>
  <div className="container max-w-[1440px]">
    <div
      className="footer-copyright mx-auto border-t border-border pb-10 pt-7 text-center"
    >
      <p>Designed And Developed by <Link href="https://themefisher.com" target="_blank">Themefisher</Link></p>
    </div>
  </div>
</footer>

{/* <!-- jQuery --> */}
{/* <!-- <script src="plugins/jquery/jquery.min.js"></script> --> */}
{/* <!-- Swiper JS --> */}
<script src="/plugins/swiper/swiper-bundle.js"></script>
<script src="/plugins/shufflejs/shuffle.js"></script>

{/* <!-- Main Script --> */}
<script src="/scripts/main.js"></script>

      </body>
      </html>
    </>
  );
}
