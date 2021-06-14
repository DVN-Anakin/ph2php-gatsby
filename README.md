Converting .ph to .php

# Endpoint 
https://pensive-tereshkova-93f20a.netlify.app/.netlify/functions/convert

# Request
Request's body should be a raw text containing .ph code like this:
```
<body>
    <div id="page">
        <h1>$title</h1>
        <ul>
            $foreach ($fruits as $fruit => $color) {
                <li style="color: $color;">
                    $(ucwords($fruit))
                    $if ($color == "green") {
                        <strong>- Meh.</strong>
                    } else if($color == "orange") {
                        <strong>- Yum!</strong>
                    }
                </li>
            }
        </ul>
        <p>All these fruits together will cost $$100.</p>
    </div>
</body>
</html>
```

# Response
event.body:
```
<body>
	<div id="page">
		<h1><?php echo $title; ?></h1>
		<ul>
			<?php foreach ($fruits as $fruit => $color) { ?>
			<li style="color: <?php echo $color; ?>;">
				<?php echo ucwords($fruit); ?>
				<?php if ($color == "green") { ?>
				<strong>- Meh.</strong>
				<?php } else if($color == "orange") { ?>
				<strong>- Yum!</strong>
				<?php } ?>
			</li>
			<?php } ?>
		</ul>
		<p>All these fruits together will cost $100.</p>
	</div>
</body>

</html>
```
