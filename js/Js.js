        $(document).ready(function () {
                
                $('.images').click(function () { 
                  $('.modal').show();
                    
                }); 
                
                $('.modal').click(function(){
                     $('.modal').hide();
                }); 
                
                $('.close').click(function () { 
                     $('.modal').hide();
                }); 
            }); 