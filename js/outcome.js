window.onload = function () {
    $.ajax({
        url: "http://localhost:40415/Service.asmx/GetDiagnosedResultByReasoning",
        data: { },
        dataType: "xml",
        method: 'POST',
        success: function (res) {
            console.log('success!')
            console.log(res)
            //debugger
            var has=res.getElementsByTagName('HasMS')[0].innerHTML
            var sco=res.getElementsByTagName('RiskDegreeCode')[0].innerHTML
            console.log(sco)
            var deg=res.getElementsByTagName('RiskDegree')[0].innerHTML
            var outcomes=res.getElementsByTagName('DiseaseDiagnosedResultList')[0].children
            document.getElementById('s1').innerHTML = has
            $('#s2')[0].innerHTML=sco
            $('#s3')[0].innerHTML=deg

            if(outcomes)
            {
                for(var i=0;i<outcomes.length;i++)
                {
                var resu=outcomes[i].getElementsByTagName('Result')[0].innerHTML
                console.log(resu)
                var los=outcomes[i].getElementsByTagName('DataNeeded')[0].innerHTML                
                var tar=outcomes[i].getElementsByTagName('TreatmentTarget')[0].innerHTML              
                var sug=outcomes[i].getElementsByTagName('TreatmentSuggestion')[0].innerHTML               
                var sef=outcomes[i].getElementsByTagName('SelfCheck')[0].innerHTML
                document.getElementById(`res[${i}]`).innerHTML=resu
                document.getElementById(`los[${i}]`).innerHTML=los
                document.getElementById(`tar[${i}]`).innerHTML="治疗目标："+"\n"+tar
                document.getElementById(`sug[${i}]`).innerHTML="治疗建议："+"\n"+sug
                document.getElementById(`sef[${i}]`).innerHTML="备注："+"\n"+sef
               }
            }
        },
        error: function (res) {
            console.log(res)
        }
    })
}