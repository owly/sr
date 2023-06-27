<?php
    $title = "AI-Powered Screenplay Analysis | ScriptReader.ai";
    $description = "Improve your screenplay with AI-driven feedback from ScriptReader.ai. Get detailed critiques, suggestions 
for every scene, and elevate your script to the next level."; 
include 'head.php'; 
?>
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
<?php
echo "<body>"; 
include("headernav.php");

require "./dbconfig.php"; 
?>

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
<?php include 'footer.php'; ?>
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
