import React from 'react';
import fbandroid from '../images/fbandroid.png';
import fblogo from '../images/fblogo.png';

const Mobile = () => {
	return (
		<div class="mobile">
			<div class="mobheader">
				<img src={fblogo} class="mobfblogo" />
			</div>
			<div id="mobapplink" class="clearfix">
				<a href="#">
					<img src={fbandroid} id="mobandroidpic" />
					<div id="getfbandroid">Get Facebook for Android and browse faster.</div>
				</a>
			</div>
			<div class="mobmaindiv">
				<div id="mobtextdiv">
					<input type="text" class="mobtextbox mobtextbox1" placeholder="Mobile number or email address" />
					<input type="password" class="mobtextbox mobtextbox2" placeholder="Password" />
				</div>
				<div class="mobloginbuttondiv">
					<input type="submit" class="mobloginbutton" value="Log In" />
				</div>
				<div id="ordiv">
					<span id="or">or</span>
				</div>
				<div id="mobcreatediv">
					<button id="mobcreate">Create New Account</button>
				</div>
				<div class="mobforgotpw">
					<a href="#">Forgotten password?</a>
					<span>·</span>
					<a href="#">Help Center</a>
				</div>
			</div>
			<div class="mobfooter">
				<div id="moblangs">
					<div class="item1">
						<li><a href="#" id="mobcurrentlang">English (UK)</a></li>
						<li><a href="#">தமிழ்</a></li>
						<li><a href="#">हिन्दी</a></li>
						<li><a href="#">বাংলা</a></li>
					</div>
					<div class="item2">
						<li><a href="#">മലയാളം</a></li>
						<li><a href="#">ಕನ್ನಡ</a></li>
						<li><a href="#">اردو</a></li>
						<li><a href="#"><i class="fa fa-plus-square-o"></i></a></li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
