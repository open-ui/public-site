window.onscroll=function(e){
	var pagenav=document.getElementById('pagenav'), css=pagenav.getAttribute('class');
	if(document.body.scrollTop>470){
		if(css.indexOf("navbar-inverse")<0){
			pagenav.setAttribute("class",css.trim()+" navbar-inverse");
		}	
	}else{
		pagenav.setAttribute("class",css.replace("navbar-inverse","").trim());
	}
};
