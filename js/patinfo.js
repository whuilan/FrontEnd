function save(){
    var PatName = $('#PatName-input').val()
    var PatID = $('#PatID-input').val()
    var PatSex = $('#PatSex-input').val()
    var PatNational = $('#PatNational-input').val()
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
        },
        error: function (res) {
            console.log(res)
        }
    })
}