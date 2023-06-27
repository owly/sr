<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <script src="./navbar.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets//css//style.css">

    <style>
        ::-webkit-scrollbar {
            background-color: #083A54 !important;
            width: 8px;
        }


        ::-webkit-scrollbar-thumb {
            background-color: #23BAB1 !important;
            border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #23BAB1 !important;
        }
    </style>

<title>AI-Powered Screenplay Analysis | ScriptReader.ai</title>
</head>
 
  <link href="./css/normalize.css" rel="stylesheet" type="text/css" />
  <link href="./css/webflow.css" rel="stylesheet" type="text/css" />
  <link href="./css/lander-409e35.webflow.css" rel="stylesheet" type="text/css" /> 
  <script>
    window.onload = function () {
      if (window.location.protocol !== 'http') {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
        metaTag.setAttribute('content', 'upgrade-insecure-requests');
        document.head.appendChild(metaTag);
      }
    }
  </script>
  <script type="text/javascript">
    !(function (o, c) {
      var n = c.documentElement,
        t = " w-mod-";
      (n.className += t + "js"),
      ("ontouchstart" in o ||
        (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
    })(window, document);
  </script>
  <link href="http://api.writesonic.com/static/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link href="http://api.writesonic.com/static/images/webclip.png" rel="apple-touch-icon" />
  <script src="https://unpkg.com/feather-icons"></script> 
<body>      <nav id='navbar' class="navbar bg_primary navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.php"> <img class="rounded-circle logo" height='40'width="40"
                    src="./assets/images/logo-2.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navBar mx-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <a class="nav-link" href="./gallery.php">Show me the Money! (Script Library)</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="./analyzethis.php">Analyze This!</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="./blo">Dial B for Blog</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="./contact.php">You Talking to me? (Contact)</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <script src="./navbar.js"></script>

<body>
        <div style='z-index:1' class="alert alert-info text-center" role="alert">
            <h4 class="alert-heading">We Stand with the WGA</h4>
            <p>Free coverage for WGA members working on a spec script. <a href="contact.php" class="alert-link">Contact us</a> for the deal.</p>
        </div>

  <div class="section"> 
    <div class="container mt-3xl mb-3xl">
      <div class="row">
        <div class="column align-center">
          <h1 class="test-giga text-center">Get expert feedback on your screenplay with AI-powered scriptreader.ai.
</h1>
          <p class="text-lg text-center max-w-lg"> Improve your writing with detailed critiques and suggestions for every scene. Let our AI help you take your screenplay to the next level.</p>
          <a href="/analyzethis.php" class="button xl main mt-lg w-button">Get the first 3 scenes of your script analyzed free.  <br/>No Credit Card required.</a>
          <div class="text-sm mt-md muted">
          </div>
        </div>
      </div>
    </div>
    <div class="circle"></div>
  </div>
  <div class="section">
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CxfjlGrU2BM?autoplay=1&loop=1&playlist=OV2eeJie3oQ&mute=1&controls=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <!--img src="http://api.writesonic.com/static/images/product-shot.png" srcset="
        http://api.writesonic.com/static/images/product-shot-p-500.png  500w,
        http://api.writesonic.com/static/images/product-shot-p-800.png 800w,
        http://api.writesonic.com/static/images/product-shot-p-1080.png 1080w,
        http://api.writesonic.com/static/images/product-shot.png 1521w
      " sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, 720px"
      data-w-id="a4177896-a5e5-6c6a-0980-01ce8ea2054a" style="opacity: 0" alt="" class="product-shot" /-->
  </div>
  <div class="section">
    <div class="container mt-2xl mb-2xl">
      <div class="row">
        <div class="column align-center">
          <h2 class="max-w-lg text-center">Take your screenplay to the next level with AI analysis.
</h2>
          <p class="text-lg text-center max-w-md">
             With scriptreader.ai, you can receive thorough feedback on your screenplay at lightning speed. Our AI technology provides grades, critiques, and suggestions for improvement on a scene-by-scene basis. Whether you&#39;re a seasoned screenwriter or just starting out, scriptreader.ai can help take your work to the next level.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="row items-center v-t">
        <div class="column align-left p-2xl">
          <h2 class="max-w-lg">Elevate your screenplay with AI analysis.
</h2>
          <p class="text-lg"> Take your screenplay to the next level with scriptreader.ai. Our AI technology will analyze each scene and provide you with personalized feedback, grades, critiques, and suggestions on how to improve it. Elevate your writing game today and create a masterpiece that will captivate audiences.</p>
        </div>
        <div class="column align-center p-2xl">
<div class="card" style="width: 18rem;">
    <img src="./images/Screenshot_rambo1.png" class="card-img-top" alt="Analysis of Rambo">
    <div class="card-body">
        <h5 class="card-title">Analysis of a scene in Rambo</h5>
        <p class="card-text">Each scene is graded, critiqued.  Strengths and weaknesses identified, ways to improve are suggested.</p>
    </div>
</div>
        </div>
      </div>
      <div class="row reverse items-center v-t">
        <div class="column align-left p-2xl">
          <h2 class="max-w-lg">Unlock the full potential of your script with AI analysis. 
</h2>
          <p class="text-lg"> Get an in-depth understanding of your screenplay&#39;s strengths and weaknesses with scriptreader.ai&#39;s AI-powered analysis. With detailed grades, critiques, and personalized suggestions for improvement for each scene, you can take your script to the next level and unlock its full potential.</p>
        </div>
        <div class="column align-center p-1">
<div class="card" style="width: 18rem;">
    <img src="./images/Screenshot_rambo_sw.png" class="card-img-top" alt="Analysis of Rambo">
    <div class="card-body">
        <h5 class="card-title">Analysis of Rambo's second scene</h5>
    </div>
</div>
      </div>
      <div class="row items-center v-t">
        <div class="column align-left p-2xl">
          <h2 class="max-w-lg">Elevate Your Screenplay with AI Feedback.
</h2>
          <p class="text-lg"> Take your screenplay to the next level with scriptreader.ai. Our AI technology provides personalized feedback and suggestions on how to improve each scene. Elevate your writing and increase your chances of success in the industry.</p>
        </div>
        <div class="column align-center p-2xl">
          <!--img src="http://api.writesonic.com/static/images/marginalia-order-complete.png" alt="" class="feature-card" /-->
          <img src="./images/Screenshot_rambo2.png"/>
        </div>
      </div>
    </div>
  </div>
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OV2eeJie3oQ?autoplay=1&loop=1&playlist=OV2eeJie3oQ&mute=1&controls=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">A look at an Analysis</h5>
                        <p class="card-text">We ran the script of Everything Everywhere All at Once through our system.  You can find the <a href="https://scriptreader.ai/disp.php?movieid=1dfacb2ea5a03e0a915999e03b5a56196f1b1664d2f768d1b7eff60ac059789d">full analysis here</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  <div class="section main mt-2xl">
    <div class="container mt-2xl mb-2xl">
      <div class="row items-center">
        <div class="column align-center">
          <h1 class="max-w-lg text-giga text-center text-white">Take your screenplay to the next level with scriptreader.ai.
</h1>
          <a href="/analyzethis.php" class="button xl main white mt-lg w-button"> Start improving your screenplay today.</a>
<br/>
          <a href="/gallery.php" class="button xl main white  mt-lg w-button"> Check out examples.</a>
        </div>
      </div>
    </div>
  </div>
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3483438,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1485423462196782');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1485423462196782&ev=PageView&noscript=1" />
</noscript>
<!-- End Meta Pixel Code -->

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e840fa469e9320caabf1254/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-LR3WEHY0QH"></script> <scri$
<script>




<footer class="bg_primary shadow-lg text-white w-100 py-3 d-flex align-items-center mt-3">
    <div class="container">
        <div class="row d-flex align-items-center justify-content-between">
            <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <p class="mb-0 text-center">Copyright © 2023 <span class="fst-italic text_secondary"><a href="/">ScriptReader.ai.</a></span> All rights reserved.</p>
            </div>
         <div class="col-lg-6">
            <ul class="d-flex flex-wrap mb-0 justify-content-lg-end justify-content-center footerLinks list-unstyled mt-3 mt-lg-0">
                <li class="mx-2"><a href="terms.php">Terms of Use</a></li>
                <li class="mx-2"><a href="privacy.php">Privacy Policy</a></li>
                <li class="mx-2"><a href="cookie.php">Cookie Policy</a></li>
                <li class="mx-2"><a href="GDPR.php">GDPR Compliance</a></li>
            </ul>
        </div>
    </div>
  </div>
</footer>


  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ea1b995c6b4c10f74406a08"
    type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
  </script>
  <script src="http://api.writesonic.com/static/js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
  <script>
    feather.replace();
  </script>
</body>

</html>
