import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "tree-plantation-nepal")!;

const TreePlantationNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Forests: A Treasure Under Threat</h2>
    <p>
      Nepal is one of the world's most forested countries, with approximately <strong>45% of its land area covered by forests</strong>. These forests are not just beautiful — they are essential. They regulate water cycles, prevent landslides and soil erosion, provide habitat for Nepal's iconic wildlife, absorb carbon from the atmosphere, and sustain the livelihoods of millions of Nepali families who depend on forests for timber, firewood, and non-timber forest products.
    </p>
    <p>
      But Nepal's forests are under severe threat. Deforestation, overgrazing, illegal logging, agricultural encroachment, and the impacts of climate change are all taking a heavy toll. According to the World Bank, Nepal lost nearly <strong>25,000 hectares of forest</strong> per year during the 1990s — and while community forestry programs have helped slow this loss significantly, illegal deforestation and forest degradation remain serious problems in many parts of the country.
    </p>
    <p>
      Every tree matters. And that is precisely why <strong>EHH Nepal's tree plantation initiative</strong> is one of our core programs.
    </p>

    <h2>Why Tree Plantation is One of the Most Powerful Climate Actions</h2>
    <p>
      Tree plantation might sound simple — and that simplicity is actually one of its greatest strengths. Unlike complex technological solutions to climate change, planting a tree requires no special equipment, no advanced degree, and very little money. Yet the benefits are profound and lasting.
    </p>

    <h3>Carbon Sequestration</h3>
    <p>
      Trees absorb carbon dioxide (CO₂) from the atmosphere and store it in their wood, roots, and surrounding soil. A single mature tree can absorb <strong>approximately 21 kg of CO₂ per year</strong>. Over a lifetime of 50 years, a single tree sequesters more than 1 tonne of CO₂. Multiply that by millions of trees, and the impact on Nepal's carbon footprint becomes enormous.
    </p>
    <p>
      EHH Nepal's tree plantation program has already offset <strong>34 tonnes of CO₂</strong> through the 2,500+ trees we have planted. This is just the beginning.
    </p>

    <h3>Preventing Landslides and Soil Erosion</h3>
    <p>
      Nepal's steep hillsides are highly susceptible to landslides, particularly during the monsoon season. Landslides kill hundreds of Nepalis every year and destroy farmland, roads, and homes. Tree roots hold soil in place, dramatically reducing the risk of landslides. In deforested areas, the risk of catastrophic slides is many times higher.
    </p>
    <p>
      By planting trees on hillsides and riverbanks, EHH Nepal is directly protecting communities from one of Nepal's most deadly natural hazards.
    </p>

    <h3>Protecting Watersheds and Water Supply</h3>
    <p>
      Forests act as natural water filters and regulators. They absorb rainfall, release it slowly into rivers and streams, and prevent the flash flooding that devastates communities after heavy rainfall. Without forests, monsoon rains run directly off bare hillsides, causing floods and washing away precious topsoil.
    </p>
    <p>
      For Nepal — a country where millions depend on rivers for drinking water, irrigation, and hydropower — healthy forests are essential infrastructure.
    </p>

    <h3>Supporting Biodiversity</h3>
    <p>
      Nepal's forests are home to extraordinary wildlife: Bengal tigers, one-horned rhinos, clouded leopards, red pandas, and over 900 species of birds. Forests provide the habitat and food sources these animals need to survive. When forests are destroyed, wildlife loses its home — and the rich biodiversity that makes Nepal so special is lost forever.
    </p>

    <h2>EHH Nepal's Tree Plantation Program: How It Works</h2>
    <p>
      EHH Nepal's tree plantation program follows a careful, community-centered approach:
    </p>
    <ol>
      <li>
        <strong>Site Selection:</strong> We work with local communities and district forest offices to identify the most suitable planting sites — areas at high risk of landslides, degraded forestland, school grounds, and public spaces.
      </li>
      <li>
        <strong>Species Selection:</strong> We prioritize native species that are adapted to local conditions and provide maximum ecological benefit. This includes species like Sal (Shorea robusta), Chilaune (Schima wallichii), Alder (Alnus nepalensis), Bamboo, and fruit-bearing trees that also support local food security.
      </li>
      <li>
        <strong>Community Involvement:</strong> Local communities are involved in every stage — from planting to ongoing care. This ensures that trees are properly maintained and that local people feel ownership over the plantation.
      </li>
      <li>
        <strong>Student-Led Drives:</strong> EHH Nepal organizes student tree plantation events at schools across Nepal, combining the plantation with environmental education sessions.
      </li>
      <li>
        <strong>Impact Tracking:</strong> We monitor and record every tree planted, tracking survival rates and CO₂ sequestration to measure our true environmental impact.
      </li>
    </ol>

    <h2>How You Can Join Nepal's Tree Plantation Movement</h2>
    <p>
      Tree plantation is something that anyone — students, teachers, parents, community members — can participate in. Here's how you can get involved with EHH Nepal's plantation drives:
    </p>
    <ul>
      <li><strong>Join EHH Nepal</strong> and participate in organized plantation events in your district</li>
      <li><strong>Organize a plantation drive</strong> at your school or college with EHH Nepal's support</li>
      <li><strong>Plant trees at home</strong> — even planting one tree in your garden contributes to Nepal's green cover</li>
      <li><strong>Donate or fundraise</strong> to support tree nurseries and plantation programs in remote districts</li>
      <li><strong>Spread the word</strong> — share information about the importance of trees with your community</li>
    </ul>

    <h2>The Numbers That Inspire Us</h2>
    <p>
      EHH Nepal's tree plantation mission has already achieved remarkable results — but we know we are just getting started:
    </p>
    <ul>
      <li><strong>2,500+ trees planted</strong> across Nepal since 2024</li>
      <li><strong>34 tonnes of CO₂</strong> offset</li>
      <li><strong>200+ student volunteers</strong> engaged in plantation activities</li>
      <li>Target: <strong>77,000 trees</strong> — 1,000 per district — within 3 years</li>
    </ul>

    <h2>Every Tree is a Promise to the Future</h2>
    <p>
      When a student plants a tree, they are making a promise. A promise that they care about the Nepal they will inherit. A promise that they are willing to act, not just talk. A promise to the communities that will be protected by that tree's roots for generations to come.
    </p>
    <p>
      At EHH Nepal, we believe that Nepal's green future is built one tree at a time — by the hands of the young people who love this country most.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Learn how to join EHH Nepal</Link> and be part of Nepal's tree plantation movement. And explore our article on{" "}
      <Link to="/blog/youth-environmental-movement-nepal">youth environmental movements in Nepal</Link> to understand the bigger picture.
    </p>
  </BlogArticleLayout>
);

export default TreePlantationNepal;
