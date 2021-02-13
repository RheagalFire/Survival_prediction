function getSexValue() {
    var uiSex = document.getElementsByName("uiSex");
    for(var i in uiSex) {
      if(uiSex[i].checked) {
          return uiSex[i].value;
      }
    }
    return -1; // Invalid Value
  }
  
  function getSiblings() {
    var Siblings = document.getElementsByName("Siblings");
    for(var i in Siblings) {
      if(Siblings[i].checked) {
          return Siblings[i].value;
      }
    }
    return -1; // Invalid Value
  }

  function getEmbarked()
  {
      var Embarked =document.getElementsByName("Embarked")
      for (var i in Embarked)
      {
          if(Embarked[i].checked)
          {
              return Embarked[i].value;
          }

      }
      return -1;
  }

  function getParch()
  {
      var parch=document.getElementsByName("Parch")
      for(var i in parch)
      {
          if(parch[i].checked)
          {
              return parch[i].value;
          }
      }
      return -1;
  }


  
  function onClickedEstimateSurvial() {
    console.log("Survival button clicked");
    var Age = document.getElementById("uiAge");
    var Sex = getSexValue();
    var SibSp = getSiblings();
    var Embarked = getEmbarked();
    var Parch = getParch();
    var Fare = document.getElementById("uiFare");
    var estsurv=document.getElementById("uiEstimateSur");
  
    var url = "/predict_survival"; 

  
    $.post(url, {
        Age: parseFloat(Age.value),
        Sex: Sex,
        SibSp: SibSp,
        Embarked: Embarked,
        Parch:Parch,
        Fare:parseFloat(Fare.value)
    },function(data, status) {
        console.log(data.Est_survival);
        var display;
        if(data.Est_survival==1)
        {
             display='Yes';
        }
        else
        {
            display='No';

        }
        estsurv.innerHTML = "<h2>" + display.toString() + "</h2>";
        console.log(status);
    });
  }