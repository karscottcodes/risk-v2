function Resources() {
	return (
		<>
			<div className="container mx-auto p-4">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-bold mb-2 text-tor-blue">
						Methods & Resources
					</h2>
					<p className="pb-3">Sorted Neighbourhoods By:</p>
                    <p>
					<ol>
						<li>1. Non-Canadian Citizen %</li>
						<li>2. Rent Burdened %</li>
						<li>3. Unemployment Rate</li>
						<li>4. Average Rent</li>
					</ol>
                    </p>
					<p class="mt-3">
						Sorted by Average Rank & then divided into 5 risk
						categories.
					</p>
				</div>
			</div>
		</>
	);
}

export default Resources;
