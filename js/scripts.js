var yellow = "rgb(255, 255, 0)";
var red = "rgb(255, 0, 0)";
var green = "rgb(0, 255, 0)";
var blue = "rgb(0, 0, 255)";
var white = "rgb(255, 255, 255)";
var orange = "rgb(255, 165, 0)";

var face = 'front';
$(function() {
    $('.square').click(function() {
        if ($(this).attr('id') != 's4') {
            var currentColor = $(this).css('background-color');
            currentColor = currentColor.toString();
            if (currentColor == blue) {
                $(this).css('background-color', green);
            } else if (currentColor == green) {
                $(this).css('background-color', red);
            } else if (currentColor == red) {
                $(this).css('background-color', orange);
            } else if (currentColor == orange) {
                $(this).css('background-color', yellow);
            } else if (currentColor == yellow) {
                $(this).css('background-color', white);
            } else if (currentColor == white) {
                $(this).css('background-color', blue);
            }
        }
    });

    $('#statebtn').click(function() {

        /*FACES[face][0] = getColor($('#s0').css('background-color').toString());
        FACES[face][1] = getColor($('#s1').css('background-color').toString());
        FACES[face][2] = getColor($('#s2').css('background-color').toString());
        FACES[face][3] = getColor($('#s3').css('background-color').toString());
        FACES[face][4] = getColor($('#s4').css('background-color').toString());
        FACES[face][5] = getColor($('#s5').css('background-color').toString());
        FACES[face][6] = getColor($('#s6').css('background-color').toString());
        FACES[face][7] = getColor($('#s7').css('background-color').toString());
        FACES[face][8] = getColor($('#s8').css('background-color').toString());*/
        if (face == 'front') {
            face = 'right';
            $('#face-name').text("Right Face")
            $('.square').css('background-color', orange);
        } else if (face == 'right') {
            face = 'left';
            $('#face-name').text("Left Face")
            $('.square').css('background-color', red);
        } else if (face == 'left') {
            face = 'up';
            $('#face-name').text("Up Face")
            $('.square').css('background-color', yellow);
        } else if (face == 'up') {
            face = 'down';
            $('#face-name').text("Bottom Face")
            $('.square').css('background-color', white);
        } else if (face == 'down') {
            face = 'back';
            $('#face-name').text("Back Face")
            $(this).text('save state');
            $('.square').css('background-color', green);
        } else if (face == 'back') {
            $('#rubik-link').show('clip');
            face = '';
            YUI().use('rubik-simple', function(Y) {
                var cube = window.cube = new Y.Rubik();
                cube.run();
            });
            
        }
    });
});

function getColor(color) {
    var coloString = "";
    if (color == blue) coloString = "blue";
    else if (color == red) coloString = "red";
    else if (color == orange) coloString = "orange";
    else if (color == green) coloString = "green";
    else if (color == yellow) coloString = "yellow";
    else if (color == white) coloString = "white";
    return coloString;
}