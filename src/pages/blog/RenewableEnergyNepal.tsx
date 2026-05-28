import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "renewable-energy-nepal-youth-advocacy")!;

const RenewableEnergyNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Energy Paradox: Immense Potential, Persistent Poverty</h2>
    <p>
      Nepal sits atop one of the world's greatest clean energy resources. Its rivers — fed by Himalayan snowmelt and monsoon rainfall — hold an estimated <strong>83,000 megawatts (MW) of technically feasible hydropower potential</strong>, of which only about 2,500 MW has been developed. Nepal also receives abundant solar radiation across most of the country, and significant wind energy potential in mountain passes and high plains. In theory, Nepal could power itself many times over with clean, renewable energy.
    </p>
    <p>
      In practice, the picture is more complicated. Millions of Nepali households — particularly in rural and remote areas — still cook over wood fires, breathe <Link to="/blog/air-pollution-kathmandu-nepal">toxic indoor smoke</Link>, and spend significant income on fuel. Nepal's electricity access has improved dramatically in recent years, but energy poverty remains a serious challenge. And the fossil fuel energy that is used continues to contribute to <Link to="/blog/climate-change-nepal-youth-action">climate change</Link> that devastates Nepal's communities.
    </p>
    <p>
      The transition to clean, renewable energy is one of the most important challenges Nepal's youth must champion — for the climate, for public health, and for Nepal's economic development.
    </p>

    <h2>Nepal's Renewable Energy Resources</h2>

    <h3>Hydropower: Nepal's Greatest Energy Asset</h3>
    <p>
      Nepal's rivers are its most valuable energy resource. Hydropower already accounts for the vast majority of Nepal's electricity generation, and the sector is growing rapidly. Projects like the Upper Tamakoshi (456 MW), Tanahu (140 MW), and Budhigandaki (1,200 MW — under development) are transforming Nepal's electricity supply. Nepal has recently achieved electricity export to India, turning its hydropower surplus into economic opportunity.
    </p>
    <p>
      But hydropower must be developed wisely. Large dams can displace communities, disrupt river ecosystems, and damage downstream fisheries. The best approach combines large national projects with smaller run-of-river schemes that minimise environmental impact and can serve remote communities off the main grid.
    </p>

    <h3>Solar Energy: Clean Power for Every Rooftop</h3>
    <p>
      Nepal receives excellent solar radiation across most of the country — particularly in the drier northern and western regions, and in the Terai. Solar energy has already transformed rural electrification in Nepal, with solar home systems bringing electricity to hundreds of thousands of households in areas not connected to the national grid.
    </p>
    <p>
      As solar panel costs have plummeted globally, the economics of solar energy have become increasingly attractive. Rooftop solar on schools, government buildings, hospitals, and homes can significantly reduce electricity costs and carbon emissions. Nepal's government has set ambitious targets for solar capacity expansion — but implementation needs to accelerate dramatically.
    </p>

    <h3>Biogas: Clean Cooking for Rural Nepal</h3>
    <p>
      Biogas — produced from animal and human waste in simple anaerobic digesters — is one of the most appropriate clean energy technologies for rural Nepal. Nepal's biogas program, supported by government and international organizations, has installed <strong>over 400,000 biogas plants</strong> — one of the largest such programs in Asia. Biogas provides clean cooking fuel, eliminates the indoor smoke that causes respiratory diseases, and produces nutrient-rich slurry that improves crop yields.
    </p>
    <p>
      Scaling biogas adoption further — particularly in livestock-keeping communities in Nepal's hills and Terai — represents one of the most cost-effective energy and health interventions available.
    </p>

    <h3>Improved Cookstoves</h3>
    <p>
      Even where biogas or electric cooking is not yet feasible, improved cookstoves — which burn wood more efficiently and direct smoke away from indoor spaces — can dramatically reduce indoor air pollution and fuel wood consumption. Nepal's improved cookstove programs have benefited millions of households, though millions more still cook on open fires.
    </p>

    <h3>Wind Energy</h3>
    <p>
      Nepal has largely untapped wind energy potential, particularly in mountain passes (like Mustang and Kali Gandaki), high ridges, and some Terai areas. Wind energy remains relatively undeveloped in Nepal, but as technology improves and costs fall, it could become an important complement to hydropower and solar.
    </p>

    <h2>Why Nepal's Energy Transition Matters for Climate</h2>
    <p>
      Nepal contributes less than 0.1% of global greenhouse gas emissions — making it one of the world's least responsible contributors to climate change. Yet it is one of the countries most devastatingly affected by it. This profound injustice makes Nepal's case for international climate finance and technology support particularly compelling.
    </p>
    <p>
      At the same time, Nepal's domestic energy choices matter. Every household that switches from firewood to biogas or electricity is improving its health outcomes and reducing domestic emissions. Every new hydropower or solar project reduces Nepal's dependence on imported fossil fuels, strengthening energy security and keeping money in the country.
    </p>
    <p>
      Nepal has committed to ambitious renewable energy and climate targets in its Nationally Determined Contribution (NDC) under the Paris Agreement. Achieving those targets requires not just government action — but the active engagement of civil society, businesses, and above all, Nepal's youth.
    </p>

    <h2>Electric Vehicles: Nepal's Quiet Transport Revolution</h2>
    <p>
      One of Nepal's most impressive clean energy success stories is its electric vehicle (EV) revolution. Kathmandu Valley has become one of Asia's leaders in electric vehicle adoption, with electric three-wheelers (tempos) dominating public transport in many routes, and a rapidly growing fleet of electric motorcycles, cars, and buses.
    </p>
    <p>
      Nepal's combination of hydropower electricity and steep EV import duties have made electric vehicles economically attractive. This transition is directly improving <Link to="/blog/air-pollution-kathmandu-nepal">Kathmandu's air quality</Link> — one of the most tangible environmental benefits visible to city residents. Supporting and accelerating Nepal's EV transition is something students can advocate for actively.
    </p>

    <h2>How EHH Nepal Advocates for Renewable Energy</h2>
    <p>
      EHH Nepal recognizes that the transition to clean energy is inseparable from our broader environmental and humanitarian mission:
    </p>
    <ul>
      <li><strong>Awareness campaigns:</strong> Educating students and communities about the benefits of clean energy — for health, for the environment, and for economic development</li>
      <li><strong>Clean cooking advocacy:</strong> Supporting the adoption of biogas and improved cookstoves in communities where indoor air pollution is a health crisis</li>
      <li><strong>Solar school initiatives:</strong> Advocating for solar panels on school buildings across Nepal's 77 districts</li>
      <li><strong>Policy advocacy:</strong> Calling on government to accelerate renewable energy development and phase out fossil fuel subsidies</li>
      <li><strong>Connecting energy to climate:</strong> Helping students understand the link between Nepal's energy choices and the climate crisis that threatens Nepal's communities, <Link to="/blog/climate-change-agriculture-nepal">farmers</Link>, and ecosystems</li>
    </ul>

    <h2>What You Can Do to Advance Clean Energy in Nepal</h2>
    <ul>
      <li><strong>Advocate for solar panels</strong> at your school, college, or local government office</li>
      <li><strong>Support biogas adoption</strong> in rural communities where livestock are kept</li>
      <li><strong>Choose electric transport</strong> where available — electric tempos, buses, motorcycles</li>
      <li><strong>Reduce energy waste</strong> at home — <Link to="/blog/sustainable-living-nepal-students">see our sustainable living guide</Link></li>
      <li><strong>Learn about Nepal's energy policy</strong> and engage with policymakers through letters, meetings, and public advocacy</li>
      <li><strong>Join EHH Nepal</strong> and be part of the movement advocating for a clean energy future</li>
    </ul>

    <h2>Nepal's Clean Energy Future is in Young Hands</h2>
    <p>
      Nepal's energy transition is underway — but it needs to accelerate dramatically to meet climate targets, eliminate energy poverty, and protect public health. The young people who are students today will be the energy engineers, policymakers, entrepreneurs, and community leaders who drive this transition over the coming decades.
    </p>
    <p>
      Nepal has everything it needs to power itself cleanly and sustainably — the rivers, the sun, the wind, and above all, the young people who care enough to make it happen.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and help build Nepal's clean energy future.
    </p>
  </BlogArticleLayout>
);

export default RenewableEnergyNepal;
