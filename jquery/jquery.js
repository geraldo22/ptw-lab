$(document).ready(
    function ()
    {
        /*$('div').hide();*/
        $(document).on(
            'click',
            '#btm',
            function ()
            {
                $('div').show();
            }
        );
        $(document).on(
            'click',
            '#bte',
            function ()
            {
                $('div').hide();
            }
        );
        $("div").after(
            "<button id='btm'>show me</button>"
        );
        $("button").after(
            "<button id='bte'>hide me</button>"
        );

        $(document).on(
            'click',
            'div p',
            function ()
            {
                var item = prompt("Alterar Email", $(this).text());
                if (item != null)
                    $(this).text(item);
            }
        )
    }
);
