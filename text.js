setTimeout(
    function () {
        $('.text-love').css("display", "block");
        var animatedText = $(".animated-title-text").text().split("");
        $(".animated-title-text").empty();
        $.each(animatedText, function (i, v) {
            $("p").append($("<span>").text(v));
        });

        var numSpans = $(".animated-title-text span").length;
        for (i = 0; i <= numSpans; i++) {
            $(".animated-title-text span:nth-child(" + i + ")").css(
                "animation-delay",
                i / 10 + "s"
            );
        }
    }, 2000);