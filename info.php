<?php
date_default_timezone_set("Asia/Jakarta");
$tahun = date("Y");
$jam = date("H");

if ($jam < 12) {
    $sapaan = "Selamat Pagi";
} elseif ($jam < 18) {
    $sapaan = "Selamat Sore";
} else {
    $sapaan = "Selamat Malam";
}

echo "<p style='margin-top: 16px; font-size: 0.8rem; opacity: 0.7;'>";
echo "&copy; $tahun Learn.AI — $sapaan, terima kasih telah berkunjung.";
echo "</p>";
?>