const campaigns = [
  {
    name: "Summer Sale",
    platform: "Instagram",
    spend: "₹25,000",
    leads: 320,
    status: "Active",
  },
  {
    name: "Product Launch",
    platform: "Google Ads",
    spend: "₹45,000",
    leads: 560,
    status: "Active",
  },
  {
    name: "Influencer Campaign",
    platform: "YouTube",
    spend: "₹30,000",
    leads: 210,
    status: "Completed",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Brand Campaign Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Spend</p>
          <h2 className="text-3xl font-bold">₹1,00,000</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Leads</p>
          <h2 className="text-3xl font-bold">1090</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold">₹4,50,000</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">ROAS</p>
          <h2 className="text-3xl font-bold">4.5x</h2>
        </div>

      </div>


      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Campaigns
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Campaign</th>
              <th className="text-left p-3">Platform</th>
              <th className="text-left p-3">Spend</th>
              <th className="text-left p-3">Leads</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name} className="border-b">

                <td className="p-3">
                  {campaign.name}
                </td>

                <td className="p-3">
                  {campaign.platform}
                </td>

                <td className="p-3">
                  {campaign.spend}
                </td>

                <td className="p-3">
                  {campaign.leads}
                </td>

                <td className="p-3">
                  {campaign.status}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </main>
  );
}