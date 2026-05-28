import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "deforestation-nepal-causes-effects-solutions")!;

const DeforestationNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Forests Are Disappearing — And It Affects Every Single One of Us</h2>
    <p>
      Nepal was once covered almost entirely by dense, thriving forests. Today, those forests are shrinking at a rate that should alarm every Nepali — young and old, urban and rural. <strong>Deforestation</strong> — the large-scale removal of trees and forest cover — is one of Nepal's most serious and far-reaching environmental problems, with consequences that ripple through every aspect of life: water supply, food security, disaster risk, climate, and biodiversity.
    </p>
    <p>
      But there is hope. Nepal's students and youth — through movements like <strong>EHH Nepal (Earth for Human and Humanity)</strong> — are taking direct action to reverse this damage, one tree, one community, and one district at a time.
    </p>

    <h2>The Scale of the Problem: Nepal's Forest Loss in Numbers</h2>
    <p>
      While Nepal has made progress through community forestry programs, the situation remains critical:
    </p>
    <ul>
      <li>Nepal lost an estimated <strong>1.7% of its forest cover annually</strong> in severely affected regions during peak deforestation periods</li>
      <li>The Terai lowland region — Nepal's most fertile and densely populated zone — has lost over <strong>70% of its original forest cover</strong> since the 1950s</li>
      <li>The <strong>mid-hill regions</strong> face ongoing pressure from agricultural expansion and fuel wood collection</li>
      <li>Even protected forests face threats from illegal logging, encroachment, and climate-induced forest fires</li>
    </ul>

    <h2>What is Causing Deforestation in Nepal?</h2>
    <p>
      Understanding the causes of deforestation is the first step toward solving it. In Nepal, deforestation is driven by several interconnected factors:
    </p>

    <h3>1. Agricultural Expansion</h3>
    <p>
      As Nepal's population grows — particularly in the Terai — demand for agricultural land increases. Forests are cleared to make way for rice paddies, vegetable fields, and grazing land. This is particularly severe in low-lying districts where flat land is scarce and population density is high. With <strong>over 65% of Nepal's workforce employed in agriculture</strong>, the pressure on forest land is enormous.
    </p>

    <h3>2. Fuel Wood and Charcoal Production</h3>
    <p>
      Despite progress in electrification, millions of Nepali households — especially in rural and remote areas — still rely on wood as their primary cooking fuel. The demand for fuel wood places enormous daily pressure on forests, as families collect wood for cooking and heating. In some districts, <strong>80–90% of energy needs</strong> are met by biomass (wood and crop residue), making fuel wood collection a major driver of deforestation.
    </p>

    <h3>3. Illegal Logging</h3>
    <p>
      Despite strict legal protections, illegal logging remains a significant problem in many of Nepal's forests. Timber from Nepal's forests — particularly valuable hardwoods like Sal and Khair — commands high prices and attracts criminal networks. Enforcement in remote forest areas is challenging, leaving many forests vulnerable to illegal cutting.
    </p>

    <h3>4. Infrastructure Development</h3>
    <p>
      Nepal's rapid infrastructure expansion — including roads, hydropower projects, and urban development — requires clearing forest land. While development is necessary for Nepal's progress, poorly planned projects can cause significant and irreversible forest loss. The construction of new roads in particular often opens up previously inaccessible forests to further encroachment.
    </p>

    <h3>5. Forest Fires</h3>
    <p>
      Nepal experiences devastating forest fires — particularly during the dry pre-monsoon season (March–May). Climate change is making these fires more frequent and more severe. In recent years, fires have destroyed thousands of hectares of Nepal's forests, killing wildlife, releasing massive amounts of carbon, and leaving hillsides bare and vulnerable to landslides.
    </p>

    <h3>6. Overgrazing</h3>
    <p>
      Large herds of livestock — particularly in hill and mountain communities — graze in and around forests, preventing natural forest regeneration. Young saplings are eaten before they can grow, and the compaction of soil by livestock makes it harder for seeds to take root.
    </p>

    <h2>The Devastating Effects of Deforestation on Nepal</h2>
    <p>
      The effects of deforestation in Nepal are not abstract — they are felt every day by millions of people across the country.
    </p>

    <h3>Landslides and Floods</h3>
    <p>
      Trees hold soil in place with their roots. When forests are removed, the soil becomes loose and unstable. During Nepal's intense monsoon rainfall, bare hillsides collapse in catastrophic landslides that bury villages, destroy roads, and kill hundreds of people every year. Deforestation is <strong>directly responsible for the increasing frequency and severity of landslides</strong> across Nepal's hills and mountains.
    </p>

    <h3>Water Scarcity</h3>
    <p>
      Forests act as natural water storage systems — absorbing rainfall, releasing it slowly into springs, rivers, and groundwater. When forests disappear, rainfall runs off rapidly, causing flash floods during the monsoon and water scarcity during the dry season. Thousands of traditional water sources (dhundhara, kuwa) across Nepal have dried up due to deforestation in their catchment areas.
    </p>

    <h3>Loss of Biodiversity</h3>
    <p>
      Nepal's forests are home to extraordinary wildlife — tigers, leopards, elephants, red pandas, and thousands of plant and insect species. As forests disappear, so do the animals and plants that depend on them. <strong>Nepal loses biodiversity permanently</strong> every time a forest is cleared — a loss that cannot be reversed. Read more in our article on <Link to="/blog/biodiversity-nepal-wildlife-conservation">biodiversity in Nepal</Link>.
    </p>

    <h3>Accelerated Climate Change</h3>
    <p>
      Forests are the lungs of our planet. They absorb CO₂ from the atmosphere. When trees are cut or burned, all that stored carbon is released — accelerating global warming and the climate change that is already devastating Nepal. Deforestation accounts for approximately <strong>10% of global greenhouse gas emissions</strong>.
    </p>

    <h3>Loss of Livelihoods</h3>
    <p>
      Millions of Nepali families depend on forests for their livelihoods — timber, non-timber forest products (herbs, honey, bamboo), medicinal plants, and tourism. As forests disappear, these livelihoods disappear with them, pushing rural communities deeper into poverty.
    </p>

    <h2>How Nepal Has Fought Back: The Community Forestry Success Story</h2>
    <p>
      Nepal is actually a global leader in one aspect of forest management: <strong>Community Forestry</strong>. Since the 1990s, Nepal's government has handed over management of forest areas to local communities — who have incentives to protect and sustainably manage them. Today, over <strong>22,000 Community Forest User Groups</strong> manage nearly 2 million hectares of Nepal's forests, with remarkable success in many areas.
    </p>
    <p>
      This is proof that when communities are empowered and take ownership, forests can recover. EHH Nepal's work is built on this same principle — empowering local communities, especially young people, to take ownership of their environment.
    </p>

    <h2>How EHH Nepal Is Reversing Deforestation</h2>
    <p>
      EHH Nepal's tree plantation program is a direct response to deforestation. By planting <strong>native tree species</strong> in deforested areas, degraded hillsides, school grounds, and community spaces across Nepal's 77 districts, EHH Nepal is helping to restore what has been lost. Our approach prioritizes:
    </p>
    <ul>
      <li><strong>Native species</strong> over exotic trees — they grow better, support local wildlife, and are more resilient</li>
      <li><strong>Community involvement</strong> — so local people feel ownership and maintain the trees long-term</li>
      <li><strong>Youth leadership</strong> — because the next generation has the most to gain from a forested Nepal</li>
      <li><strong>Education</strong> — raising awareness about why forests matter and how to protect them</li>
    </ul>
    <p>
      Read more about our tree planting work in our dedicated article on <Link to="/blog/tree-plantation-nepal">tree plantation in Nepal</Link>.
    </p>

    <h2>What You Can Do to Stop Deforestation in Nepal</h2>
    <ul>
      <li><strong>Join EHH Nepal</strong> and participate in tree plantation drives in your district</li>
      <li><strong>Switch to clean cooking energy</strong> — support LPG, biogas, or electric cookstove adoption in your community</li>
      <li><strong>Report illegal logging</strong> to your local District Forest Office</li>
      <li><strong>Reduce paper waste</strong> — recycle paper and choose digital alternatives where possible</li>
      <li><strong>Spread awareness</strong> — share this article and talk to your family about why forests matter</li>
      <li><strong>Support community forestry</strong> — participate in local forest user groups if available in your area</li>
    </ul>

    <h2>Nepal's Forests Are Worth Fighting For</h2>
    <p>
      Nepal's forests are not just trees — they are the foundation of life for millions of people and countless species. They regulate our water, protect our hills, cool our climate, and sustain our communities. Losing them is not just an environmental tragedy — it is a human one.
    </p>
    <p>
      EHH Nepal exists because we refuse to accept that loss as inevitable. Every tree we plant is a statement: Nepal's forests are worth protecting, and Nepal's youth are ready to do the work. <Link to="/blog/how-to-join-ehh-nepal">Join us</Link>.
    </p>
  </BlogArticleLayout>
);

export default DeforestationNepal;
