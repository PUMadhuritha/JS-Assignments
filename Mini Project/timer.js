var clearTime;
var seconds = 0, minutes = 0, hours = 0; 
var clearState; 
var secs, mins, gethours ;
var clear;
function stopWatch( ) { // javascript statement here
    clear = setTimeout( "stopWatch( )", 1000 ); }  
    // initialize your variables outside the function 
    var count = 0; 
    function startWatch( ) {
        if ( seconds === 60 ) {
            seconds = 0; 
            minutes = minutes + 1; 
        }
        mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );  
        if ( minutes === 60 ) { minutes = 0; hours = hours + 1; } 
        gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' );
        secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
        // display the stopwatch
        var x = document .getElementById("timer"); 
        x.innerHTML = 'Time: ' + gethours + mins + secs; 
        seconds++; 
        clearTime = setTimeout( "startWatch( )", 1000 ); }
        
        function startTime( ) { 
            if ( seconds === 0 && minutes === 0 && hours === 0 )
            {
                var fulltime = document.getElementById( "fulltime" ); 
                fulltime.style.display = "none"; /* hide the start button if the stop watch is running */
                this.style.display = "none"; 
                startWatch( );
             }
            // if ()
            } 
            // startTime() 
           /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */ 
           window.addEventListener( 'load', function ( ) { 
            var start = document .getElementById("start");
            start.addEventListener( 'click', startTime ); 
            }); // startwatch.js end 
               

//create a function to stop the time 
function stopTime( ) { /* check if seconds, minutes and hours are not equal to 0 */ 
    if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { /* display the full time before reseting the stop watch */ 
        var fulltime = document .getElementById( "fulltime" ); 
        //display the full time 
        fulltime.style.display = "block"; 
        var time = gethours + mins + secs;
        fulltime.innerHTML = 'Fulltime: ' + time;
        // reset the stop watch
        seconds = 0; minutes = 0; hours = 0; secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; 
        /* display the stopwatch after it's been stopped */ 
        var x = document.getElementById ("timer"); 
        var stopTime = gethours + mins + secs; 
        x.innerHTML = stopTime; /* display all stop watch control buttons */ 
        var showStart = document.getElementById ('start');
        showStart.style.display = "inline-block"; 
        var showStop = document.getElementById ("stop"); 
        showStop.style.display = "inline-block"; 
        /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */
        clearTimeout( clearTime ); } 
        // if () 
        } // stopTime() 
        /* you need to call the stopTime( ) function to terminate the stop watch */
        window.addEventListener( 'load', function ( ) 
        { 
            var stop = document.getElementById ("stop"); 
            stop.addEventListener( 'click', stopTime ); 
        });
        // stopwatch.js end