$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var time = $(this).parent().attr('id');
        var content = $(this).siblings('.description').val();
        // save in localStorage
        localStorage.setItem(time, content);
        // Show notification that item was saved to localStorage by adding class 'show'
        $('#notify').show();
        // Timeout to remove 'show' class after 5 seconds
        setTimeout('$("#notify").hide()',5000);
    });
    
    function hourUpdater() {
        // get current number of hours 
        currentHour = moment().hour();
        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]) ;
        // sets blockhour to past class if it is before current time
            if (blockHour < currentHour) {
                $(this).addClass('past');
        // sets blockhour to current class of it is the current hour of the day
            }  else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
        // sets blockhour to future if it is listed hour is before current hour
            }  else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })

    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
    
    var loadPrev = [
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9')),
    $('#hour-10 .description').val(localStorage.getItem('hour-10')),
    $('#hour-11 .description').val(localStorage.getItem('hour-11')),
    $('#hour-12 .description').val(localStorage.getItem('hour-12')),
    $('#hour-13 .description').val(localStorage.getItem('hour-13')),
    $('#hour-14 .description').val(localStorage.getItem('hour-14')),
    $('#hour-15 .description').val(localStorage.getItem('hour-15')),
    $('#hour-16 .description').val(localStorage.getItem('hour-16')),
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))
    ];

    //appends local storage data to respective text areas
    $(loadPrev).append;
   


    // displays current day on page
    function displayDate() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    };
displayDate();
    
});