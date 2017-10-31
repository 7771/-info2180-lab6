<script>
language="javascript" type="text/javascript">
    var getXmlBtn = document.querySelector('definition');
    getXmlBtn.addEventListener('click', function() 
    {
        var httpRequest = new XMLHttpRequest();
        var url = " https://lab6-studentzoe.c9users.io/request.php";
        httpRequest.onreadystatechange = getXml;
        httpRequest.open('GET', url);
        httpRequest.send();
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
              if (httpRequest.status === 200) 
              {
                var response = httpRequest.responseText;
                alert(response);
              }
              else
              {
                  alert('there was a problem with the request');
              }
</script>
