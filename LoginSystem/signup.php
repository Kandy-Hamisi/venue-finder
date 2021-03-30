<?php
  include_once 'header.php';
?>
  <section>

    <h2>Sign Up</h2>
    <pre>
    <form action="includes/signup.inc.php" method="post">
      <input type="text" name="name" placeholder="Full name...">
      <input type="text" name="email" placeholder="Email...">
      <input type="text" name="uid" placeholder="Username...">
      <input type="password" name="pwd" placeholder="Password...">
      <input type="password" name="pwdrepeat" placeholder="Repeat password...">
      <button type="submit" name="submit">Sign Up</button>
    </form>

  <?php
    if (isset($_GET["error"])) {
      if ($_GET["error"] == "emptyinput") {
        echo " <p>Fill in all fields! </p> ";
      }
      else if ($_GET["error"] == "invaliduid") {
        echo "<p>Choose a valid username!</p>";
      }
      else if ($_GET["error"] == "invalidemail") {
        echo "<p>Enter a valid email</p>";
      }
      else if ($_GET["error"] == "passwordsdontmatch") {
        echo "<p>Passwords do not match</p>";
      }
      else if ($_GET["error"] == "stmtfailed") {
        echo "<p>oops! Something went wrong</p>";
      }
      else if ($_GET["error"] == "usernametaken") {
        echo "<p>Username or email already taken</p>";
      }
      else if ($_GET["error"] == "none") {
        echo "<p>You have been signed up</p>";
      }
    }

   ?>
   </pre>
  </section>



<?php
  include_once 'footer.php';
?>
