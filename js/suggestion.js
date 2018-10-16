window.onload=function(){
    $.ajax({
        url: "http://localhost:40415/Service.asmx/GetDietSuggestion",
        data: { },
        dataType: "xml",
        method: 'POST',
        success:function(res){
            console.log('nice!')
            console.log(res)
            var dt=res.getElementsByTagName('DietType')[0].innerHTML
            console.log(dt)
            document.getElementById('sp1').innerHTML=dt           
            document.getElementById('sp2').innerHTML=res.getElementsByTagName('TotalEnergy')[0].innerHTML
            document.getElementById('sp3').innerHTML=res.getElementsByTagName('TotalWater')[0].innerHTML
            document.getElementById('t1').innerHTML=res.getElementsByTagName('CarboPercent')[0].innerHTML
            document.getElementById('g1').innerHTML=res.getElementsByTagName('CarboCount')[0].innerHTML
            document.getElementById('n1').innerHTML=res.getElementsByTagName('CerealCount')[0].innerHTML
            document.getElementById('n2').innerHTML=res.getElementsByTagName('Fruitcount')[0].innerHTML
            document.getElementById('n3').innerHTML=res.getElementsByTagName('GreenstuffCount')[0].innerHTML
            document.getElementById('t2').innerHTML=res.getElementsByTagName('ProteinPercent')[0].innerHTML
            document.getElementById('g2').innerHTML=res.getElementsByTagName('ProteinCount')[0].innerHTML
            document.getElementById('n4').innerHTML=res.getElementsByTagName('DairyCount')[0].innerHTML
            document.getElementById('n5').innerHTML=res.getElementsByTagName('EggCount')[0].innerHTML
            document.getElementById('n6').innerHTML=res.getElementsByTagName('MeatCount')[0].innerHTML
            document.getElementById('n7').innerHTML=res.getElementsByTagName('BeanProductCount')[0].innerHTML
            document.getElementById('t3').innerHTML=res.getElementsByTagName('FatPercent')[0].innerHTML
            document.getElementById('g3').innerHTML=res.getElementsByTagName('FatCount')[0].innerHTML
            document.getElementById('n8').innerHTML=res.getElementsByTagName('VegetableOilCount')[0].innerHTML
            document.getElementById('n9').innerHTML=res.getElementsByTagName('OtherFatFoodCount')[0].innerHTML
            document.getElementById('xl').innerHTML=res.getElementsByTagName('LimitedFood')[0].innerHTML
            document.getElementById('js').innerHTML=res.getElementsByTagName('AvoidFood')[0].innerHTML
            document.getElementById('qs1').innerHTML=res.getElementsByTagName('DataNeeded')[0].innerHTML
        },
        error:function(res){
            console.log(res)
        }
    })
    $.ajax({
        url: "http://localhost:40415/Service.asmx/GetExerciseSuggestion",
        data: { },
        dataType: "xml",
        method: 'POST',
        success:function(res){
            console.log('success')
            console.log(res)
            document.getElementById('mb').innerHTML=res.getElementsByTagName('ExerciseTarget')[0].innerHTML
            document.getElementById('hn').innerHTML=res.getElementsByTagName('EnergyCost')[0].innerHTML
            document.getElementById('yd1').innerHTML=res.getElementsByTagName('NoIntensityExercise')[0].innerHTML
            document.getElementById('yd2').innerHTML=res.getElementsByTagName('LowIntensityExercise')[0].innerHTML
            document.getElementById('yd3').innerHTML=res.getElementsByTagName('MiddleIntensityExercise')[0].innerHTML
            document.getElementById('yd4').innerHTML=res.getElementsByTagName('HighIntensityExercise')[0].innerHTML
            document.getElementById('qs2').innerHTML=res.getElementsByTagName('DataNeeded')[0].innerHTML
        },
        error:function(res){
            console.log(res)
        }
    })   
}