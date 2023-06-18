<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>File List</title>
</head>
<body>
  <h2>File List</h2>
  <ul>
    <?php
    $files = scandir(__DIR__);
    foreach ($files as $file) {
      if ($file !== '.' && $file !== '..') {
        $filePath = urlencode($file);
        echo "<li><a href=\"$filePath\">$file</a></li>";
      }
    }
    ?>
  </ul>
</body>
</html>

