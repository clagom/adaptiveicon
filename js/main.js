document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
	  
		const $ = str => document.querySelector(str);
			
		$(".showgrid").onclick = function() {
		  $(".hidegrid").style.opacity = "1";
		  document.getElementById("grid").style.opacity = "1";
		  $(".showgrid").style.opacity = "0";
		}
		
		$(".hidegrid").onclick = function() {
		  $(".showgrid").style.opacity = "1";
		  $("#grid").style.opacity = "0";
		  $(".hidegrid").style.opacity = "0";
		}
		
		$("#square").onclick = function() {
		  $(".iconwrap").style.background = "#FFC200";
		  $("#square").classList.add('.square');
		  $('.shape').classList.remove('.current');
		  $("#square").classList.add('.current');
		}
		
		$("#ios").onclick = function() {
		  $(".iconwrap").style.background = "none";
		  $("#ios").classList.add('.ios');
		  $('.shape').classList.remove('.current');
		  $("#ios").classList.add('.current');
		}
		
		$("#circle").onclick = function() {
		  $(".iconwrap").style.background = "none";
		  $("#circle").classList.add('.circle');
		  $('.shape').classList.remove('.current');
		  $("#circle").classList.add('.current');
		}
		
		$("#squircle").onclick = function() {
		  $(".iconwrap").style.background = "none";
		  $("#squircle").classList.add('.squircle');
		  $('.shape').classList.remove('.current');
		  $("#squircle").classList.add('.current');
		  alert('dfd');
		}
		
		$("#roundsquare").onclick = function() {
		  $(".iconwrap").style.background = "none";
		  $("#roundsquare").classList.add('.roundsquare');
		  $('.shape').classList.remove('.current');
		  $("#roundsquare").classList.add('.current');
		}
	 	
  }
}