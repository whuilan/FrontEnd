$(function () {
$("input:radio[name=birthDayOptions]").click(function () {
  switch($("input[name=birthDayOptions]:checked").attr("id")){
    case "inlineRadio1":
    $("#birthDayInput1").attr('disabled',false);
    $("#birthDayInput2").attr('disabled',true);
    break;
    case "inlineRadio3":
    $("#birthDayInput1").attr('disabled',true);
    $("#birthDayInput2").attr('disabled',true);
    break;
  }
});
})
$(function () {
$("input:radio[name=visitDayOptions]").click(function () {
  switch($("input[name=visitDayOptions]:checked").attr("id")){
    case "inlineRadio4":
    $("#visitDayInput3").attr('disabled',false);
    $("#visitDayInput4").attr('disabled',true);
    break;
    case "inlineRadio5":
    $("#visitDayInput3").attr('disabled',false);
    $("#visitDayInput4").attr('disabled',false);
    break;
    case "inlineRadio6":
    $("#visitDayInput3").attr('disabled',true);
    $("#visitDayInput4").attr('disabled',true);
    break;
  }
});
})
function addPatientItem (Time, PatSeq, ID, Name, Sex) {
let List = $(`#patient-list`)
// visitTime=Time
let newItem = $(`<tr id=\"pat-list-${PatSeq}\" rel=\"${Time}\"></tr>`)
let oneItem = $(`<td>${ID}</td>`)
let twoItem = $(`<td>${Name}</td>`)
let threeItem = $(`<td>${Sex}</td>`)
newItem.click(function(){
selectedPat = $(this).attr("id").split('pat-list-')[1]
patRecordSeq = patDict[selectedPat]
console.log(patRecordSeq)
console.log(patRecordSeq.join(','))
selectedTime = $(this).attr("rel")
// for(var i=0;i<=patRecordSeq.length;i++)
// {
//   getSinglePatData(patRecordSeq[i], selectedTime)
// }
getSinglePatData(patRecordSeq, selectedTime)
})
newItem.append(oneItem)
newItem.append(twoItem)
newItem.append(threeItem)
List.append(newItem)
}

function getSinglePatData ( Seq, time ) {
//let patData = { "recordSeq": Seq }
let patData = { "recordSeqs": Seq.join(',') }
$.ajax({
url : `http://localhost:40415/Service.asmx/QueryDiseaseHistoryByRecordSeq`,
data: patData,        
dataType : "xml",
contentType: "application/x-www-form-urlencoded;charset=utf8",
method: 'POST',
success : function(data) {
//debugger
console.log(data)
setDisHistoryTable(data, time)
//displayAlert(`${selectedPat}数据加载完成`)
},
error : function(data) {
//displayAlert(`${selectedPat}数据加载失败`,'danger')
}
})
}
function addDisHistoryItem (Time, Rec,Syn ,Deg, Sco, Lost) {
let List = $(`#patHistory-list`)
let newItem = $(`<tr id=\"his-list-${Rec}\"></tr>`)

let oneItem = $(`<td>${Time}</td>`)
let twoItem = $(`<td>${Syn}</td>`)
let threeItem = $(`<td>${Deg}</td>`)
let fourItem = $(`<td style="padding-left:50px">${Sco}</td>`)
let fiveItem = $(`<td>${Lost}</td>`)
newItem.click(function(){
selectedHis=$(this).attr("id").split('his-list-')[1]
//getDetailedPatData(selectedHis)
window.location.href="patinfo.html?para="+selectedHis
})
newItem.append(oneItem)
newItem.append(twoItem)
newItem.append(threeItem)
newItem.append(fourItem)
newItem.append(fiveItem)
List.append(newItem)
}
// function getDetailedPatData(PatRecSeq){
// $.ajax({
//     url : `http://localhost:40415/Service.asmx/GetDataFromDBByRecordSEQ`,
//     data: {"patRecSeq":PatRecSeq},        
//     dataType : "xml",
//     //contentType: "application/x-www-form-urlencoded;charset=utf8",
//     method: 'POST',
//     success : function(data) {
//         //debugger
//         console.log('get singlePatDatasuccessfully!')
//         console.log(data)
//     },
//     error : function(data) {
//        console.log(data)
//     }
//     })
// }
function clearDisHistoryTable () {
$(`#patHistory-list`).empty()
}

function setDisHistoryTable(data, time){
var diseases = data.getElementsByTagName('QueryDisHisRecord')
clearDisHistoryTable()
//debugger
if(diseases)
{
// clearPatientTable()
for(var i=0;i<diseases.length;i++)
{
var rec=diseases[i].getElementsByTagName('recordSEQ')[0].innerHTML
var syn=diseases[i].getElementsByTagName('metabolicsSyndrome')[0] ? diseases[i].getElementsByTagName('metabolicsSyndrome')[0].innerHTML : ''
var deg=diseases[i].getElementsByTagName('dangerDegree')[0] ? diseases[i].getElementsByTagName('dangerDegree')[0].innerHTML : ''
var sco=diseases[i].getElementsByTagName('dangerScore')[0] ? diseases[i].getElementsByTagName('dangerScore')[0].innerHTML : ''
var lost = ''
if (diseases[i].getElementsByTagName('lostInfo')[0])
  lost=diseases[i].getElementsByTagName('lostInfo')[0].innerHTML
addDisHistoryItem(time, rec,syn ,deg, sco, lost)

}
}
}

var patDict = {}
function clearPatientTable () {
$(`#patient-list`).empty()
}
function queryPat(){
patDict = {}
var strName=$('#inputPatName').val()
var PatID=$('#inputID').val()
var strSex
var radioSex=$("input[name='sexOptions']:checked").val()
//console.log(radioSex)
if(radioSex=="option1")
{strSex="男";}
else if(radioSex=="option2")
{strSex="女";}
else
{strSex="";}
//if(document.getElementById('inlineRadio7').checked)
var dtBirthDayFrom=""
var dtBirthDayTo=""
var birthDate=$("input[name='birthDayOptions']:checked").val()
if(birthDate=="option7")
{
dtBirthDayFrom=$('#birthDayInput1').val()
}

var dtVisitFrom=""
var dtVisitTo=""
var visitDate=$("input[name='visitDayOptions']:checked").val()
if(visitDate=="option4")
{dtVisitFrom=$('#visitDayInput3').val()}
else if(visitDate=="option5")
{
dtVisitFrom=$('#visitDayInput3').val()
dtVisitTo=$('#visitDayInput4').val()
}
data={
strName:strName,
PatID:PatID,
strSex:strSex,
dtBirthDayFrom:dtBirthDayFrom,
dtBirthDayTo:dtBirthDayTo,
dtVisitFrom:dtVisitFrom,
dtVisitTo:dtVisitTo
}
$.ajax({
    url: "http://localhost:40415/Service.asmx/QueryPatDataByCondition",
    data: { value: JSON.stringify(data) },
　　　　 dataType: "xml",
    method: 'POST',
    success: function (res) {
        //debugger
        console.log('success~')
        console.log(res)
        // PatName = res.getElementsByTagName('PatName')[1].innerHTML
        // console.log(PatName)
        var pats = res.getElementsByTagName('QueryPatient')
        clearPatientTable()
        //debugger
        if(pats)
        {
          // clearPatientTable()
          for(var i=0;i<pats.length;i++)
          {
            var patSeq=pats[i].getElementsByTagName('PatSEQ')[0].innerHTML
            var seq=pats[i].getElementsByTagName('RecordSEQ')[0].innerHTML
            if (!patDict[patSeq]) {
              patDict[patSeq] = [seq] // tang: [1]
              var time=pats[i].getElementsByTagName('PatVisitDateTime')[0].innerHTML
              var ID=pats[i].getElementsByTagName('PatID')[0].innerHTML
              var name=pats[i].getElementsByTagName('PatName')[0].innerHTML
              var sex=pats[i].getElementsByTagName('PatSex')[0].innerHTML
              addPatientItem(time, patSeq, ID, name, sex)
            } else {
              patDict[patSeq].push(seq) // tang: [1, 2. 3]
            }
          }
          console.log(patDict) // { tang: [1,2,4,5], 123: [1].... }
        }
        // PatList.map (item => {
        // addPatientItem(item.FollowupTime, item.Done)
        // })
    },
    error: function (res) {
        console.log(res)
    }
})
}

$('.input-daterange').datepicker({
language : 'zh-CN',
autoclose : true,
todayBtn: true,
endDate : new Date()
});
  