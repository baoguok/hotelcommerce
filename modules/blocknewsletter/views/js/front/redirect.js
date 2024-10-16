/**
 * Copyright since 2010 Webkul.
 *
 * NOTICE OF LICENSE
 *
 * All right is reserved,
 * Please go through LICENSE.txt file inside our module
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this module to newer
 * versions in the future. If you wish to customize this module for your
 * needs please refer to CustomizationPolicy.txt file inside our module for more information.
 *
 * @author Webkul IN
 * @copyright since 2010 Webkul IN
 * @license LICENSE.txt
 */

$(document).ready(function () {
    let intervalHandler = setInterval(function () {
        let remainingSeconds = parseInt($('.countdown-seconds').text());
        $('.countdown-seconds').html(--remainingSeconds);
        if (remainingSeconds <= 0) {
            clearInterval(intervalHandler);
            window.location = homepage_url;
        }
    }, 1000);
});
