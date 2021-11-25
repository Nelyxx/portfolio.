
                AOS.init();


        $("#realisations article img").click(function(){
        var titre = $(this).attr("title");
        $("#"+titre).css("display","flex");
        $(".croix").click(function(){
        $(this).parent().css("display","none");
      });
        });

        $("#audiovisuel article img").click(function(){
        var titre = $(this).attr("title");
        $("#"+titre).css("display","flex");
        $(".croix").click(function(){
        $(this).parent().css("display","none");
      });
        });

        $("#projets article img").click(function(){
        var titre = $(this).attr("title");
        $("#"+titre).css("display","flex");
        $(".croix").click(function(){
        $(this).parent().css("display","none");
      });
        });

    $('#formcontact').click(function(){
     $('form').attr('action','mailto:godardj@hotmail.com?body='+$('#message').val()+'&subject='+$('#sjt').val());

});

