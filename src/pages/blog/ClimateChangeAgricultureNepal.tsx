import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "climate-change-agriculture-nepal")!;

const ClimateChangeAgricultureNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Farmers Are on the Front Line of Climate Change</h2>
    <p>
      In the terraced rice fields of Nepal's middle hills, a farmer watches the sky. The monsoon should have started two weeks ago. His rice seedlings are ready to transplant — but without rain, they will die. This same scene is playing out across thousands of villages in Nepal, as farmers who have planted the same crops in the same fields for generations face a new and terrifying reality: <strong>the climate they have always depended on is no longer reliable</strong>.
    </p>
    <p>
      Agriculture is the foundation of Nepal's economy and food system. Over <strong>65% of Nepal's workforce</strong> is employed in agriculture, and the vast majority of Nepal's rural population depends on farming for their food and income. Yet agriculture is also the sector most immediately and devastatingly affected by climate change. In Nepal, the two are inseparable.
    </p>

    <h2>How Climate Change Is Already Hurting Nepal's Farmers</h2>

    <h3>Erratic and Unpredictable Monsoons</h3>
    <p>
      Nepal receives approximately 80% of its annual rainfall during the monsoon season (June–September). For generations, farmers planned their entire agricultural calendar around the monsoon's reliable arrival and departure. Climate change is making the monsoon increasingly erratic — arriving late, ending early, or delivering rainfall in intense bursts rather than steady patterns.
    </p>
    <p>
      The consequences are severe. Late monsoons mean delayed rice planting — shortening the growing season and reducing yields. Intense rainfall bursts cause flash floods that destroy standing crops, erode topsoil, and damage irrigation infrastructure. Extended dry spells damage crops that need consistent moisture. Farmers across Nepal describe their monsoon as "confused" — and they are right.
    </p>

    <h3>Increasing Temperature and Heat Stress</h3>
    <p>
      Nepal's average temperature has increased by approximately <strong>0.04–0.06°C per year</strong> since 1975 — a seemingly small number that has enormous practical consequences for agriculture. Higher temperatures accelerate evaporation, increasing drought stress on crops. Heat stress during critical growing phases — pollination, grain filling — can drastically reduce yields of rice, wheat, and maize. Warmer temperatures also allow agricultural pests and diseases — many previously constrained by cold mountain temperatures — to expand into new areas, attacking crops that have no natural resistance.
    </p>

    <h3>Glacier Retreat and Water Scarcity</h3>
    <p>
      Nepal's glaciers act as natural water towers — storing water during the winter and releasing it gradually through the spring and summer, sustaining river flows during the dry pre-monsoon season. As glaciers melt due to rising temperatures, river flows are initially increasing — causing more frequent flooding — but will eventually decline as glaciers disappear. This will cause catastrophic water scarcity for the millions of farmers who depend on glacier-fed rivers for irrigation.
    </p>
    <p>
      In Nepal's high mountain districts — already some of the country's most food-insecure areas — glacier retreat is already causing seasonal water shortages that affect both drinking water and crop irrigation.
    </p>

    <h3>Shifting Agricultural Zones</h3>
    <p>
      As temperatures rise, the altitudinal zones where specific crops can be grown are shifting upward. Tea, fruits, and vegetables that were once confined to lower altitudes are being grown at progressively higher elevations. While this creates some new opportunities, it also means that traditional mountain crops and farming systems are being disrupted. Communities that have farmed specific crops for generations are finding that those crops are no longer viable in their changing climate.
    </p>

    <h3>Increased Flooding and Landslide Damage</h3>
    <p>
      Nepal's agricultural land — particularly in river valleys and the Terai plains — is increasingly vulnerable to floods and landslides triggered by extreme precipitation events. In recent years, devastating floods have destroyed crops, agricultural infrastructure, and stored food across multiple districts simultaneously, creating acute food security crises. The loss of farmland to landslides is often permanent — once a terrace collapses or a field is buried, it may never be recoverable.
    </p>

    <h2>Nepal's Most Vulnerable Agricultural Communities</h2>
    <p>
      Climate change does not affect all farmers equally. Those who are most vulnerable are also those who are already the most marginalized:
    </p>
    <ul>
      <li><strong>Subsistence farmers</strong> in remote mountain districts who have the fewest resources to adapt</li>
      <li><strong>Women farmers</strong>, who make up the majority of Nepal's agricultural workforce but have less access to information, credit, and new technologies</li>
      <li><strong>Terai farmers</strong> dependent on monsoon rainfall and glacier-fed rivers</li>
      <li><strong>Landless agricultural workers</strong> who have no assets to fall back on when harvests fail</li>
      <li><strong>Communities in flood-prone river valleys</strong> who face repeated and cumulative losses</li>
    </ul>

    <h2>What Needs to Change: Climate-Resilient Agriculture in Nepal</h2>
    <p>
      Solving the climate-agriculture crisis in Nepal requires action at multiple levels — from individual farmers to national government. Key priorities include:
    </p>

    <h3>Climate-Resilient Crop Varieties</h3>
    <p>
      Nepal's agricultural research institutions — and international partners — are developing crop varieties that are more drought-tolerant, flood-resilient, and heat-resistant. Distributing these improved varieties to farmers across all 77 districts is an urgent priority. Traditional local varieties, which are often better adapted to local conditions, also deserve protection and documentation.
    </p>

    <h3>Improved Irrigation and Water Management</h3>
    <p>
      Reducing Nepal's agriculture's dependence on monsoon rainfall requires investment in efficient irrigation systems — drip irrigation, small-scale reservoirs, rainwater harvesting. These technologies, already proven in similar contexts, can dramatically increase crop security in the face of erratic rainfall.
    </p>

    <h3>Agroforestry and Soil Conservation</h3>
    <p>
      Integrating trees with crops — agroforestry — can improve soil fertility, reduce erosion, provide shade during heat stress, and increase farm biodiversity. Nepal's traditional farming systems already incorporated many of these principles; reviving and scaling them is a climate adaptation strategy with deep roots in Nepali agricultural culture.
    </p>

    <h3>Crop Diversification</h3>
    <p>
      Farmers who grow only one or two crops are devastatingly vulnerable when those crops fail. Diversifying — growing a variety of vegetables, fruits, and grains — spreads risk and ensures that even in a bad year, some harvest will succeed. EHH Nepal supports crop diversification as part of our community development work.
    </p>

    <h2>How EHH Nepal Supports Nepal's Farming Communities</h2>
    <p>
      EHH Nepal recognizes that environmental and humanitarian work are inseparable from supporting Nepal's agricultural communities. Our initiatives include:
    </p>
    <ul>
      <li><strong>Tree plantation on agricultural land:</strong> Planting trees on farm boundaries and degraded hillsides above farmland reduces soil erosion, improves water retention, and provides additional income from timber and non-timber products</li>
      <li><strong>Climate awareness for farming communities:</strong> Educating farmers and students in agricultural districts about climate change impacts, adaptation strategies, and sustainable farming practices</li>
      <li><strong>Disaster response:</strong> Supporting communities in the aftermath of floods, landslides, and droughts — including distributing seeds and agricultural supplies to affected families</li>
      <li><strong>Advocacy:</strong> Calling on government to prioritize investment in climate-resilient agriculture and support for the most vulnerable farming communities</li>
    </ul>
    <p>
      Read more about our humanitarian support work in our article on <Link to="/blog/humanitarian-aid-nepal-students">humanitarian aid in Nepal</Link>.
    </p>

    <h2>What Students Can Do to Support Nepal's Farmers</h2>
    <ul>
      <li><strong>Learn about agroecology</strong> and share knowledge with farming communities in your district</li>
      <li><strong>Support local farmers</strong> by buying locally grown, seasonal produce</li>
      <li><strong>Advocate for climate policies</strong> that prioritize support for small-scale farmers</li>
      <li><strong>Participate in tree plantation</strong> programs that protect agricultural land from erosion and floods</li>
      <li><strong>Volunteer with EHH Nepal</strong> in post-disaster agricultural recovery efforts</li>
      <li><strong>Spread awareness</strong> about the climate-agriculture connection — it affects every Nepali who eats</li>
    </ul>

    <h2>The Farmer and the Future</h2>
    <p>
      Nepal's farmers did not cause climate change. They emit a tiny fraction of the global emissions driving the crisis. Yet they are among the first and hardest hit by its consequences. That is the profound injustice of climate change — those who contribute least suffer most.
    </p>
    <p>
      EHH Nepal exists in part to address this injustice — by supporting vulnerable communities, by advocating for climate action, and by building a generation of young Nepalis who understand the connection between a healthy environment and food security. <Link to="/blog/how-to-join-ehh-nepal">Join us</Link>.
    </p>
  </BlogArticleLayout>
);

export default ClimateChangeAgricultureNepal;
