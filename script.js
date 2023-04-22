
//Input values
var xxsWidth = document.getElementById("xxs-width-cm");
var xxsLength = document.getElementById("xxs-length");
var xxsStretchWidth = document.getElementById("xxs-stretch-cm");
var xsWidth = document.getElementById("xs-width-cm"); 
var xsStretchWidth = document.getElementById("xs-stretch-cm");
var xsLength = document.getElementById("xs-length-cm");
var sWidth = document.getElementById("s-width-cm"); 
var sStretchWidth = document.getElementById("s-stretch-cm");
var sLength = document.getElementById("s-length-cm");
var mWidth = document.getElementById("m-width-cm"); 
var mStretchWidth = document.getElementById("m-stretch-cm");
var mLength = document.getElementById("m-length-cm");
var lWidth = document.getElementById("l-width-cm"); 
var lStretchWidth = document.getElementById("l-stretch-cm");
var lLength = document.getElementById("l-length-cm");
//NEW VARIABLES:
var xlWidth = document.getElementById("xl-width-cm"); 
var xlStretchWidth = document.getElementById("xl-stretch-cm");
var xlLength = document.getElementById("xl-length-cm");

//Checkbox element
var studio = document.getElementById("on-cm");

//Set (on page load) Defaults
//console.log("has fired");

xxsWidth.value = $(xxsWidth).data('inch');
xxsLength.value = $(xxsLength).data('inch');
xxsStretchWidth.value = $(xxsStretchWidth).data('inch');
xsWidth.value = $(xsWidth).data('inch');
xsStretchWidth.value = $(xsStretchWidth).data('inch');
xsLength.value = $(xsLength).data('inch');
sWidth.value = $(sWidth).data('inch');
sStretchWidth.value = $(sStretchWidth).data('inch');
sLength.value = $(sLength).data('inch');
mWidth.value = $(mWidth).data('inch');
mStretchWidth.value = $(mStretchWidth).data('inch');
mLength.value = $(mLength).data('inch');
lWidth.value = $(lWidth).data('inch');
lStretchWidth.value = $(lStretchWidth).data('inch');
lLength.value = $(lLength).data('inch');
//NEW VARIABLES:
xlWidth.value = $(xlWidth).data('inch');
xlStretchWidth.value = $(xlStretchWidth).data('inch');
xlLength.value = $(xlLength).data('inch');


//Calculation function
function calculateChange() {
//set default value to fall back on if STUDIO checkfield is switched OFF
  
  //pull dynamic default values from CMS data
  xxsWidth.value = $(xxsWidth).data('inch');
  widthDefault = xxsWidth.value;
  $('#xxs-width-cm').html(widthDefault);
    
  xxsLength.value = $(xxsLength).data('inch');
  xxsLengthDefault = xxsLength.value;
  $('#xxs-length').html(xxsLengthDefault);
  
  xxsStretchWidth.value = $(xxsStretchWidth).data('inch');
  xxsStretchWidthDefault = xxsStretchWidth.value;
  $('#xxs-stretch-cm').html(xxsStretchWidthDefault);
  //--- X-SMALL ---
  xsWidth.value = $(xsWidth).data('inch');
  xsWidthDefault = xsWidth.value;
  $('#xs-width-cm').html(xsWidthDefault);

  xsStretchWidth.value = $(xsStretchWidth).data('inch');
  xsStretchWidthDefault = xsStretchWidth.value;
  $('#xs-stretch-cm').html(xsStretchWidthDefault);

  xsLength.value = $(xsLength).data('inch');
  xsLengthDefault = xsLength.value;
  $('#xs-length-cm').html(xsLengthDefault);

  //--- SMALL ---
  sWidth.value = $(sWidth).data('inch');
  sWidthDefault = sWidth.value;
  $('#s-width-cm').html(sWidthDefault);

  sStretchWidth.value = $(sStretchWidth).data('inch');
  sStretchWidthDefault = sStretchWidth.value;
  $('#s-stretch-cm').html(sStretchWidthDefault);

  sLength.value = $(sLength).data('inch');
  sLengthDefault = sLength.value;
  $('#s-length-cm').html(sLengthDefault);

  //--- MEDIUM ---
  mWidth.value = $(mWidth).data('inch');
  mWidthDefault = mWidth.value;
  $('#m-width-cm').html(mWidthDefault);

  mStretchWidth.value = $(mStretchWidth).data('inch');
  mStretchWidthDefault = mStretchWidth.value;
  $('#m-stretch-cm').html(mStretchWidthDefault);

  mLength.value = $(mLength).data('inch');
  mLengthDefault = mLength.value;
  $('#m-length-cm').html(mLengthDefault);

  //--- LARGE ---
  lWidth.value = $(lWidth).data('inch');
  lWidthDefault = lWidth.value;
  $('#l-width-cm').html(lWidthDefault);

  lStretchWidth.value = $(lStretchWidth).data('inch');
  lStretchWidthDefault = lStretchWidth.value;
  $('#l-stretch-cm').html(lStretchWidthDefault);

  lLength.value = $(lLength).data('inch');
  lLengthDefault = lLength.value;
  $('#l-length-cm').html(lLengthDefault);

  //--- X-LARGE ---
  xlWidth.value = $(xlWidth).data('inch');
  xlWidthDefault = xlWidth.value;
  $('#xl-width-cm').html(xlWidthDefault);

  xlStretchWidth.value = $(xlStretchWidth).data('inch');
  xlStretchWidthDefault = xlStretchWidth.value;
  $('#xl-stretch-cm').html(xlStretchWidthDefault);

  xlLength.value = $(xlLength).data('inch');
  xlLengthDefault = xlLength.value;
  $('#xl-length-cm').html(xlLengthDefault);

 
  //convert to CM checked
  if (studio.checked === true) {
    
    xxsWidth.value = Number(xxsWidth.value) * 2.54;
    wid = xxsWidth.value;
    $('#xxs-width-cm').html(wid);
    
    xxsLength.value = Number(xxsLength.value) * 2.54;
    xxsLengthCm = xxsLength.value;
    $('#xxs-length').html(xxsLengthCm);
    
    xxsStretchWidth.value = Number(xxsStretchWidth.value) * 2.54;
    xxsStretchWidthCm = xxsStretchWidth.value;
    $('#xxs-stretch-cm').html(xxsStretchWidthCm);

    //--- X-SMALL ---
    xsWidth.value = Number(xsWidth.value) * 2.54;
    xsWidthCm = xsWidth.value;
    $('#xs-width-cm').html(xsWidthCm);

    xsStretchWidth.value = Number(xsStretchWidth.value) * 2.54;
    xsStretchWidthCm = xsStretchWidth.value;
    $('#xs-stretch-cm').html(xsStretchWidthCm);

    xsLength.value = Number(xsLength.value) * 2.54;
    xsLengthCm = xsLength.value;
    $('#xs-length-cm').html(xsLengthCm);

    //--- SMALL ---
    sWidth.value = Number(sWidth.value) * 2.54;
    sWidthCm = sWidth.value;
    $('#s-width-cm').html(sWidthCm);

    sStretchWidth.value = Number(sStretchWidth.value) * 2.54;
    sStretchWidthCm = sStretchWidth.value;
    $('#s-stretch-cm').html(sStretchWidthCm);

    sLength.value = Number(sLength.value) * 2.54;
    sLengthCm = sLength.value;
    $('#s-length-cm').html(sLengthCm);

    //--- MEDIUM ---
    mWidth.value = Number(mWidth.value) * 2.54;
    mWidthCm = mWidth.value;
    $('#m-width-cm').html(mWidthCm);

    mStretchWidth.value = Number(mStretchWidth.value) * 2.54;
    mStretchWidthCm = mStretchWidth.value;
    $('#m-stretch-cm').html(mStretchWidthCm);

    mLength.value = Number(mLength.value) * 2.54;
    mLengthCm = mLength.value;
    $('#m-length-cm').html(mLengthCm);
    
    //--- LARGE ---
    lWidth.value = Number(lWidth.value) * 2.54;
    lWidthCm = lWidth.value;
    $('#l-width-cm').html(lWidthCm);

    lStretchWidth.value = Number(lStretchWidth.value) * 2.54;
    lStretchWidthCm = lStretchWidth.value;
    $('#l-stretch-cm').html(lStretchWidthCm);

    lLength.value = Number(lLength.value) * 2.54;
    lLengthCm = lLength.value;
    $('#l-length-cm').html(lLengthCm);

    //--- X-LARGE ---
    xlWidth.value = Number(xlWidth.value) * 2.54;
    xlWidthCm = xlWidth.value;
    $('#xl-width-cm').html(xlWidthCm);

    xlStretchWidth.value = Number(xlStretchWidth.value) * 2.54;
    xlStretchWidthCm = xlStretchWidth.value;
    $('#xl-stretch-cm').html(xlStretchWidthCm);

    xlLength.value = Number(xlLength.value) * 2.54;
    xlLengthCm = xlLength.value;
    $('#xl-length-cm').html(xlLengthCm);    
    
  } 
  
  
}


studio.onchange = function () {
calculateChange();
};
