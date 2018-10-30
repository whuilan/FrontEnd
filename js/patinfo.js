window.onload = function (){
    $.ajax({
        url: "http://localhost:40415/Service.asmx/SetPatSEQToNew",
        data: { },
　　　　 dataType: "xml",
        method: 'POST',
        success: function (res) {
            console.log('设置新入病人成功')
        },
        error: function (res) {
            console.log(res)
        }
    })
}

  var PatVisitDateTime = $('#PatVisitDateTime-input')
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  PatVisitDateTime.val(year+'年'+month+'月'+day+'日')

function save(){
    var PatName = $('#PatName-input').val()
    var PatID = $('#PatID-input').val()
    var PatSex = $('#PatSex-input').val()
    var PatNational = $('#PatNational-input').val()
    var PatBirthday = $('#PatBirthday-input').val()
    var PatVisitDateTime = $('#PatVisitDateTime-input').val()
    var Height=$('#Height-input').val()
    var Weigh=$('#Weigh-input').val()
    var WC=$('#WC-input').val()
    var SBP1=$('#SBP1-input').val()
    var DBP1=$('#DBP1-input').val()
    var HC=$('#HC-input').val()
    var FBG=$('#FBG-input').val()
    var TWOHPBG=$('#TWOHPBG-input').val()
    var HBA1C=$('#HBA1C-input').val()
    var FastingInsulin=$('#FastingInsulin-input').val()
    var PostprandialInsulin=$('#PostprandialInsulin-input').val()
    var CR=$('#CR-input').val()
    var AlanineAminotransferase=$('#AlanineAminotransferase-input').val()
    var AspartateAminotransferase=$('#AspartateAminotransferase-input').val()
    var SerumTotalProtein=$('#SerumTotalProtein-input').val()
    var SerumAlbumin=$('#SerumAlbumin-input').val()
    var BUA=$('#BUA-input').val()
    var TC=$('#TC-input').val()
    var HDLC=$('#HDLC-input').val()
    var TG=$('#TG-input').val()
    var LDLC=$('#LDLC-input').val()
    var Tbil=$('#Tbil-input').val()
    var UN=$('#UN-input').val()
    var AFP=$('#AFP-input').val()
    var CEA=$('#CEA-input').val()
    var IsSmokeing=$('#IsSmokeing-input').val()
    var IsDrinking=$('#IsDrinking-input').val()
    var HasExerciseRecent=$('#HasExerciseRecent-input').val()
    var MainFoodAmount=$('#MainFoodAmount-input').val()
    var ProteinAmount=$('#ProteinAmount-input').val()
    var OilAmount=$('#OilAmount-input').val()
    var MaxWeight=$('#MaxWeight-input').val()
    var data={
        PatName:PatName,
        PatID:PatID,
        PatSex: PatSex,
        PatNational: PatNational,
        PatBirthday:PatBirthday,
        PatVisitDateTime:PatVisitDateTime,
        Height:Height,
        Weigh:Weigh,
        WC:WC,
        SBP1:SBP1,
        DBP1:DBP1,
        HC:HC,
        FBG:FBG,
        TWOHPBG:TWOHPBG,
        HBA1C:HBA1C,
        FastingInsulin:FastingInsulin,
        PostprandialInsulin:PostprandialInsulin,
        CR:CR,
        AlanineAminotransferase:AlanineAminotransferase,
        AspartateAminotransferase:AspartateAminotransferase,
        SerumTotalProtein:SerumTotalProtein,
        SerumAlbumin:SerumAlbumin,
        BUA:BUA,
        TC:TC,
        HDLC:HDLC,
        TG:TG,
        LDLC:LDLC,
        Tbil:Tbil,
        UN:UN,
        AFP:AFP,
        CEA:CEA,
        IsSmokeing:IsSmokeing,
        IsDrinking:IsDrinking,
        HasExerciseRecent:HasExerciseRecent,
        MainFoodAmount:MainFoodAmount,
        ProteinAmount:ProteinAmount,
        OilAmount:OilAmount,
        MaxWeight:MaxWeight
    }
    $.ajax({
        url: "http://localhost:40415/Service.asmx/SaveQuickInfoToDB",
        data: { value: JSON.stringify(data) },
　　　　 dataType: "xml",
        method: 'POST',
        success: function (res) {
            console.log('success')
            console.log(res)
            window.location.href = "outcome.html"
        },
        error: function (res) {
            console.log(res)
        }
    })
}

var url = location.search;
if (url.indexOf("?") != -1){
    var str = url.substr(1);
    var strs=str.split("=")
    let PatRecSeq = strs[1];
    $.ajax({
        url : `http://localhost:40415/Service.asmx/GetDataFromDBByRecordSEQ`,
        data: {"patRecSeq":PatRecSeq},        
        dataType : "xml",
        //contentType: "application/x-www-form-urlencoded;charset=utf8",
        method: 'POST',
        success : function(data) {
            //debugger
            console.log('get single PatData successfully!')
            console.log(data)
            setPatData(data)
        },
        error : function(data) {
           console.log(data)
        }
        })
}

function setPatData(data){
   //var PatBasicInfo=data.getElementsByTagName('PatBasicInfo')
    var PatName = $('#PatName-input')
    var PatID = $('#PatID-input')
    var PatSex = $('#PatSex-input')
    var PatNational = $('#PatNational-input')
    var PatBirthday = $('#PatBirthday-input')
    var PatVisitDateTime = $('#PatVisitDateTime-input')
    var Height=$('#Height-input')
    var Weigh=$('#Weigh-input')
    var WC=$('#WC-input')
    var SBP1=$('#SBP1-input')
    var DBP1=$('#DBP1-input')
    var HC=$('#HC-input')
    var FBG=$('#FBG-input')
    var TWOHPBG=$('#TWOHPBG-input')
    var HBA1C=$('#HBA1C-input')
    var FastingInsulin=$('#FastingInsulin-input')
    var PostprandialInsulin=$('#PostprandialInsulin-input')
    var CR=$('#CR-input')
    var AlanineAminotransferase=$('#AlanineAminotransferase-input')
    var AspartateAminotransferase=$('#AspartateAminotransferase-input')
    var SerumTotalProtein=$('#SerumTotalProtein-input')
    var SerumAlbumin=$('#SerumAlbumin-input')
    var BUA=$('#BUA-input')
    var TC=$('#TC-input')
    var HDLC=$('#HDLC-input')
    var TG=$('#TG-input')
    var LDLC=$('#LDLC-input')
    var Tbil=$('#Tbil-input')
    var UN=$('#UN-input')
    var AFP=$('#AFP-input')
    var CEA=$('#CEA-input')
    var IsSmokeing=$('#IsSmokeing-input')
    var IsDrinking=$('#IsDrinking-input')
    var HasExerciseRecent=$('#HasExerciseRecent-input')
    var MainFoodAmount=$('#MainFoodAmount-input')
    var ProteinAmount=$('#ProteinAmount-input')
    var OilAmount=$('#OilAmount-input')
    var MaxWeight=$('#MaxWeight-input')

    PatName.val(data.getElementsByTagName('PatName')[0].innerHTML)
    PatID.val(data.getElementsByTagName('PatID')[0].innerHTML)
    PatSex.val(data.getElementsByTagName('PatSex')[0].innerHTML)
    PatNational.val(data.getElementsByTagName('PatNational')[0].innerHTML)
    var date1=data.getElementsByTagName('PatBirthday')[0].innerHTML.split('-')
    var date2=date1[2].split('T')
    PatBirthday.val(date1[0]+'年'+date1[1]+'月'+date2[0]+'日')
    var date3=data.getElementsByTagName('PatVisitDateTime')[0].innerHTML.split('-')
    var date4=date1[2].split('T')
    PatVisitDateTime.val(date3[0]+'年'+date3[1]+'月'+date4[0]+'日')
    Height.val(data.getElementsByTagName('Height')[0].innerHTML)
    Weigh.val(data.getElementsByTagName('Weigh')[0].innerHTML)
    WC.val(data.getElementsByTagName('WC')[0].innerHTML)
    SBP1.val(data.getElementsByTagName('SBP1')[0].innerHTML)
    DBP1.val(data.getElementsByTagName('DBP1')[0].innerHTML)
    HC.val(data.getElementsByTagName('HC')[0].innerHTML)
    FBG.val(data.getElementsByTagName('FBG')[0].innerHTML)
    TWOHPBG.val(data.getElementsByTagName('TWOHPBG')[0].innerHTML)
    HBA1C.val(data.getElementsByTagName('HBA1C')[0].innerHTML)
    FastingInsulin.val(data.getElementsByTagName('FastingInsulin')[0].innerHTML)
    PostprandialInsulin.val(data.getElementsByTagName('PostprandialInsulin')[0].innerHTML)
    CR.val(data.getElementsByTagName('CR')[0].innerHTML)
    AlanineAminotransferase.val(data.getElementsByTagName('AlanineAminotransferase')[0].innerHTML)
    AspartateAminotransferase.val(data.getElementsByTagName('AspartateAminotransferase')[0].innerHTML)
    SerumTotalProtein.val(data.getElementsByTagName('SerumTotalProtein')[0].innerHTML)
    SerumAlbumin.val(data.getElementsByTagName('SerumAlbumin')[0].innerHTML)
    BUA.val(data.getElementsByTagName('BUA')[0].innerHTML)
    TC.val(data.getElementsByTagName('TC')[0].innerHTML)
    HDLC.val(data.getElementsByTagName('HDLC')[0].innerHTML)
    TG.val(data.getElementsByTagName('TG')[0].innerHTML)
    LDLC.val(data.getElementsByTagName('LDLC')[0].innerHTML)
    Tbil.val(data.getElementsByTagName('Tbil')[0].innerHTML)
    UN.val(data.getElementsByTagName('UN')[0].innerHTML)
    AFP.val(data.getElementsByTagName('AFP')[0].innerHTML)
    CEA.val(data.getElementsByTagName('CEA')[0].innerHTML)
    IsSmokeing.val(data.getElementsByTagName('IsSmokeing')[0].innerHTML)
    IsDrinking.val(data.getElementsByTagName('IsDrinking')[0].innerHTML)
    HasExerciseRecent.val(data.getElementsByTagName('HasExerciseRecent')[0].innerHTML)
    MainFoodAmount.val(data.getElementsByTagName('MainFoodAmount')[0].innerHTML)
    ProteinAmount.val(data.getElementsByTagName('ProteinAmount')[0].innerHTML)
    OilAmount.val(data.getElementsByTagName('OilAmount')[0].innerHTML)
    MaxWeight.val(data.getElementsByTagName('MaxWeight')[0].innerHTML)
}

$("input[name='startTime']").datepicker({
    minView : "day", //  选择时间时，最小可以选择到那层；默认是‘hour’也可用0表示
    language : 'zh-CN', // 语言
    autoclose : true, //  true:选择时间后窗口自动关闭
    //format : 'yyyy-mm-dd hh:00:00', // 文本框时间格式，设置为0,最后时间格式为2017-03-23 17:00:00
    todayBtn : "linked", // 如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。
    endDate : new Date()   // 窗口最大时间直至今天
  })