import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "water-pollution-nepal-rivers")!;

const WaterPollutionNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Rivers: Sacred, Life-Giving, and Rapidly Dying</h2>
    <p>
      In Hindu and Buddhist tradition, rivers are sacred — they are the veins of the earth, carrying life and blessings to all who depend on them. Nepal's rivers hold a central place in the country's cultural, spiritual, and practical life. The Bagmati, the Gandaki, the Koshi, the Karnali — these are not just waterways. They are the lifeblood of Nepal.
    </p>
    <p>
      But Nepal's rivers are in crisis. From the Bagmati flowing through Kathmandu — one of the world's most sacred rivers, also one of its most polluted — to the rivers of the Terai flooded with agricultural runoff and industrial waste, <strong>water pollution is one of Nepal's most urgent environmental emergencies</strong>. And it is getting worse.
    </p>

    <h2>The State of Water Pollution in Nepal</h2>
    <p>
      The scale of Nepal's water pollution problem is staggering:
    </p>
    <ul>
      <li>The <strong>Bagmati River</strong> flowing through Kathmandu has Biological Oxygen Demand (BOD) levels far beyond safe limits in urban stretches — meaning it essentially functions as an open sewer through much of the city</li>
      <li>Only <strong>15–20% of Kathmandu's wastewater</strong> is treated before entering rivers; the rest flows in untreated</li>
      <li>Agricultural chemicals — pesticides, herbicides, and fertilizers — contaminate rivers and groundwater in the Terai, affecting drinking water for millions</li>
      <li>Industrial effluents from brick kilns, tanneries, carpet factories, and other industries pollute rivers with heavy metals and toxic chemicals</li>
      <li>Solid waste dumped in and near rivers contaminates water sources and blocks natural flow</li>
    </ul>

    <h2>What is Causing Water Pollution in Nepal?</h2>

    <h3>1. Untreated Sewage and Wastewater</h3>
    <p>
      Nepal's urban areas — especially Kathmandu Valley — lack adequate wastewater treatment infrastructure. Sewage from homes, hospitals, hotels, and businesses flows directly into rivers with little or no treatment. The result is rivers contaminated with human waste, pathogens, pharmaceutical residues, and harmful bacteria that make the water dangerous for swimming, drinking, or any direct contact.
    </p>

    <h3>2. Industrial Waste Discharge</h3>
    <p>
      Nepal's growing industrial sector — including carpet factories, dyeing and textile industries, brick kilns, metal processing, and food processing — generates liquid waste containing heavy metals, dyes, acids, and other toxic substances. Many industries discharge this waste directly into rivers or into drains that lead to rivers, bypassing treatment requirements.
    </p>

    <h3>3. Agricultural Runoff</h3>
    <p>
      Nepal's agricultural revolution has dramatically increased the use of chemical fertilizers and pesticides — particularly in the Terai. When it rains, these chemicals wash off fields into rivers and groundwater systems. <strong>Nitrate contamination from fertilizers</strong> is particularly dangerous, causing algal blooms that deplete oxygen in rivers, killing fish and other aquatic life. Pesticide residues in rivers affect not only aquatic ecosystems but also the communities downstream that rely on river water for drinking and irrigation.
    </p>

    <h3>4. Solid Waste Dumping</h3>
    <p>
      Despite recent improvements in waste management, solid waste — including plastic bags, bottles, food waste, and construction debris — continues to be dumped in and near rivers across Nepal. This waste blocks water flow, creates breeding grounds for disease-carrying insects, and leaches toxins into the water as it breaks down. The plastic waste problem is particularly severe. Read our dedicated article on <Link to="/blog/plastic-pollution-nepal-solutions">plastic pollution in Nepal</Link>.
    </p>

    <h3>5. Religious and Cultural Practices</h3>
    <p>
      Nepal's deep religious traditions around rivers — including cremation ceremonies, ritual bathing, and offerings — also contribute to water pollution when not managed sustainably. Ash, flowers, incense, plastic garlands, and other ritual materials frequently end up in rivers. Addressing this requires sensitive community education, not condemnation of cultural practice.
    </p>

    <h2>The Impact of Water Pollution on Nepal's People and Environment</h2>

    <h3>Health Consequences</h3>
    <p>
      Contaminated water causes diarrhoea, cholera, typhoid, hepatitis A, and other waterborne diseases that kill thousands of Nepalis — particularly children — every year. Diarrhoeal diseases remain one of the leading causes of child mortality in Nepal. In rural areas where people rely on rivers and unprotected wells for drinking water, contamination from agricultural chemicals and pathogens poses constant health risks.
    </p>

    <h3>Loss of Aquatic Life</h3>
    <p>
      Nepal's rivers were once teeming with fish — providing food, nutrition, and livelihoods for millions of families. Pollution has devastated fish populations across Nepal's major river systems. The Bagmati River in Kathmandu was historically home to over 30 species of fish; today, most stretches support almost none. This loss affects not just ecology but the food security and livelihoods of fishing communities.
    </p>

    <h3>Threat to Downstream Communities</h3>
    <p>
      Nepal's rivers flow south into India and eventually to the Bay of Bengal — meaning water pollution in Nepal affects communities far beyond its borders. This is a regional responsibility as well as a national one.
    </p>

    <h2>Stories of Hope: The Bagmati Cleanup Movement</h2>
    <p>
      The Bagmati River is an inspiring example of what community action can achieve. The <strong>Bagmati River Cleanup Campaign</strong> — which began in 2013 and has involved hundreds of thousands of volunteers over the years — has made measurable progress in reducing solid waste in the Bagmati, mobilizing public awareness, and pressuring authorities to invest in wastewater treatment.
    </p>
    <p>
      This is exactly the kind of citizen-led environmental action that EHH Nepal believes in and builds upon.
    </p>

    <h2>How EHH Nepal Is Protecting Nepal's Rivers</h2>
    <p>
      EHH Nepal works to address water pollution through several interconnected approaches:
    </p>
    <ul>
      <li><strong>River cleanup drives:</strong> Organizing student-led cleanup events to remove solid waste from riverbanks and waterways</li>
      <li><strong>Community education:</strong> Teaching communities about the causes and consequences of water pollution, and promoting responsible waste disposal</li>
      <li><strong>Riparian tree planting:</strong> Planting trees along riverbanks to filter runoff, stabilize banks, and restore riparian ecosystems</li>
      <li><strong>Advocacy:</strong> Pressuring local governments and businesses to invest in proper waste treatment and stop illegal dumping</li>
      <li><strong>Anti-plastic campaigns:</strong> Reducing the plastic waste that is a major source of river pollution</li>
    </ul>

    <h2>What You Can Do to Protect Nepal's Rivers</h2>
    <ul>
      <li><strong>Never dump waste near rivers</strong> or drains that flow to rivers</li>
      <li><strong>Reduce plastic use</strong> — carry a reusable bag, refuse single-use plastics</li>
      <li><strong>Participate in river cleanup events</strong> in your area</li>
      <li><strong>Compost kitchen waste</strong> rather than dumping it in waterways</li>
      <li><strong>Report illegal dumping</strong> to local authorities</li>
      <li><strong>Use natural, biodegradable products</strong> wherever possible</li>
      <li><strong>Join EHH Nepal</strong> and help protect Nepal's rivers</li>
    </ul>

    <h2>Our Rivers Deserve Better</h2>
    <p>
      The Bagmati carried the prayers of generations. The Koshi feeds the plains of Nepal and Bihar. The Karnali is one of the last great wild rivers of Asia. These rivers deserve our respect and our protection — not our waste.
    </p>
    <p>
      EHH Nepal's students across all 77 districts are working to restore Nepal's rivers to their rightful state: clean, flowing, teeming with life, and safe for every community that depends on them.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal today</Link> and be part of Nepal's river restoration movement.
    </p>
  </BlogArticleLayout>
);

export default WaterPollutionNepal;
