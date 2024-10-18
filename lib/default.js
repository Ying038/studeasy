

loadShared()

function loadShared() {


	var sdata = JSON.parse(localStorage.getItem('sdata')) || {}
	$('#sharable').remove()


	$('body').prepend(`<div id="sharable">
		<nav class="navbar fixed-top navbar-expand-lg bg-light">
			<div class="container-fluid">
			
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="index.html">Home</a>				  
				</li>

				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Learning Type
					</a>
					<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="visual.html">Visual</a></li>
					<li><a class="dropdown-item" href="audio.html">Auditory</a></li>
					<li><a class="dropdown-item" href="read.html">Read / Write</a></li>
					<li><a class="dropdown-item" href="kinesthetic.html">Kinesthetic</a></li>
					
					</ul>
				</li>

				`+(sdata && sdata.authenticatedUser? ( `

					<li class="nav-item">
						<a class="nav-link" href="duration.html">Study Duration</a>
					</li>
					<!--li class="nav-item">
						<a class="nav-link" href="Contact.html">Contact</a>
					</li-->
					<!--li class="nav-item">
						<a class="nav-link" href="Feedback.html">Feedback</a>
					</li-->
					<li class="nav-item">
						<a class="nav-link" href="task.html">Task List</a>
					</li>
					<li class="nav-item">
						<a class="nav-link"  href="Vark.html">VARK Test</a>
					</li>

					
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="#" onclick="event.preventDefault();logout()" >Logout</a>				  
					</li>

					<li class="nav-item">
						<h3 style="width:500px;text-align:right" >${sdata[sdata.authenticatedUser].name}</h3>
					</li>

					`):``)+`
				</ul>

			</div>
			</div>
		</nav>

		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-bs-config='{"delay":10000}'>
			<div class="toast-header">
				<strong class="me-auto">Info</strong>
				<!--small>sometimes ago</small-->
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
			</div>
			</div>
		</div>
	</div>`)

}

function toast(msg) {
	var toastLiveExample = document.getElementById('liveToast')
	var toast = new bootstrap.Toast(toastLiveExample)
	 
	$('.toast-body').html(msg)				
	toast.show()
}

function logout() {
	var sdata = JSON.parse(localStorage.getItem('sdata')) || {}

	delete sdata.authenticatedUser

	localStorage.setItem('sdata', JSON.stringify(sdata))

	window.location.href = "index.html";

}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
//preset user
var sdata = JSON.parse(localStorage.getItem('sdata')) || {}

var user = [], i=0
user[i] = sdata['hh'] || {}
user[i].name = 'Heng Hong'
user[i].password = '123'
sdata['hh'] = user[0]
i++

user[i] = sdata['yunshi_123'] || {}
user[i].name = 'Wong Yun Shi'
user[i].password = 'abc123'
sdata['yunshi_123'] = user[1]
i++

user[i] = sdata['sim_456'] || {}
user[i].name = 'Poh Sim Ean'
user[i].password = '456cde'
sdata['sim_456'] = user[2]
i++

user[i] = sdata['amy_321'] || {}
user[i].name = 'Amy Yeoh'
user[i].password = '123456'
sdata['amy_321'] = user[3]
i++

localStorage.setItem('sdata', JSON.stringify(sdata))