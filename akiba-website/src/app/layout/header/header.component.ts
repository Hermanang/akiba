import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
	<!-- SubHeader -->
	<div class="careerfy-subheader">
		<span class="careerfy-banner-transparent"></span>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="careerfy-page-title">
						<h1>Jobs For Good Programmers</h1>
						<p>Yes! You make or may not find the right job for you, but that’s ok.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- SubHeader -->
    `
})
export class HeaderComponent {

  constructor() {}

}
