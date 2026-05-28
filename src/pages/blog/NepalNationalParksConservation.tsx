import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "nepal-national-parks-conservation")!;

const NepalNationalParksConservation = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's National Parks: The Crown Jewels of a Biodiversity Nation</h2>
    <p>
      Nepal's system of protected areas is one of the most impressive in Asia. Covering nearly <strong>24% of Nepal's total land area</strong>, the country's 12 national parks, 6 wildlife reserves, 1 hunting reserve, 13 conservation areas, and 12 buffer zones protect an extraordinary range of ecosystems — from subtropical forests and wetlands in the Terai to the highest mountain ecosystems on Earth.
    </p>
    <p>
      These protected areas are not just nature reserves. They are the lungs that clean Nepal's air. The water towers that feed its rivers. The carbon stores that help regulate the global climate. The habitat that sustains Nepal's iconic wildlife. And the foundation of Nepal's tourism industry — which contributes directly to the livelihoods of millions of Nepali families.
    </p>
    <p>
      But they face growing threats. And it is Nepal's young people — through movements like <strong>EHH Nepal</strong> — who must lead the fight to protect them.
    </p>

    <h2>Nepal's Most Important Protected Areas</h2>

    <h3>Sagarmatha National Park — The Roof of the World</h3>
    <p>
      Established in 1976 and declared a UNESCO World Heritage Site in 1979, <strong>Sagarmatha National Park</strong> protects the world's highest mountain ecosystem, including Mount Everest (8,849m). The park covers 1,148 sq km of the Khumbu region and is home to the snow leopard, red panda, Himalayan tahr, and hundreds of bird species. It is also central to the culture and livelihoods of the Sherpa people. Threats include tourism waste, climate change causing glacier retreat, and increasing frequency of avalanches.
    </p>

    <h3>Chitwan National Park — Nepal's Tiger and Rhino Fortress</h3>
    <p>
      Nepal's first national park (established 1973) and another UNESCO World Heritage Site, <strong>Chitwan National Park</strong> is one of Asia's finest wildlife reserves. The park's dense forests and tall grasslands shelter over 700 one-horned rhinoceroses, 355+ Bengal tigers, wild elephants, gharial crocodiles, four-horned antelope, and the endangered Bengal Florican. Chitwan is a global conservation success story — and a reminder of what is possible when habitats are protected and communities are engaged.
    </p>

    <h3>Langtang National Park — The Valley of Glaciers</h3>
    <p>
      Located just 50 km north of Kathmandu, <strong>Langtang National Park</strong> protects dramatic high-altitude landscapes including glaciers, alpine meadows, and rhododendron forests. Home to snow leopards, red pandas, Himalayan black bears, and extraordinary bird life, Langtang suffered catastrophic damage in the 2015 earthquake and the recovery of both the ecosystem and the communities that depend on it continues today.
    </p>

    <h3>Bardia National Park — Nepal's Wild West</h3>
    <p>
      Nepal's largest protected area in the Terai, <strong>Bardia National Park</strong> covers 968 sq km of pristine forest, grassland, and river systems in far-western Nepal. Less visited than Chitwan, Bardia offers outstanding wildlife experiences — tigers, rhinos, elephants, wild dogs, and the magnificent Gangetic river dolphin. Bardia is increasingly important as a tiger conservation area and a model for community-based conservation.
    </p>

    <h3>Kanchenjunga Conservation Area — A Trans-boundary Treasure</h3>
    <p>
      In Nepal's far northeast, the <strong>Kanchenjunga Conservation Area</strong> protects the spectacular landscapes around the world's third-highest mountain (8,586m). This remote area hosts snow leopards, red pandas, blue sheep, and extraordinary rhododendron forests. It is part of a trans-boundary conservation area with India, representing one of the world's most ambitious international conservation collaborations.
    </p>

    <h3>Shivapuri Nagarjun National Park — Kathmandu's Green Lung</h3>
    <p>
      Just north of Kathmandu, <strong>Shivapuri Nagarjun National Park</strong> is the capital city's most accessible natural escape — and one of its most important environmental assets. The park protects the watersheds that supply drinking water to Kathmandu Valley, moderates the valley's temperature, and provides habitat for leopards, deer, and over 300 bird species. Urban encroachment and waste dumping from the expanding city are its primary threats.
    </p>

    <h2>The Threats Facing Nepal's Protected Areas</h2>

    <h3>Climate Change</h3>
    <p>
      <Link to="/blog/climate-change-nepal-youth-action">Climate change</Link> is transforming Nepal's protected areas in profound ways. Glaciers in high-altitude parks are retreating rapidly. Changes in temperature and rainfall are shifting the distribution of plant communities and the animals that depend on them. Alpine species are being pushed higher with nowhere to go. Monsoon changes are affecting the grasslands and forests that Chitwan's rhinos and tigers depend on.
    </p>

    <h3>Deforestation and Encroachment</h3>
    <p>
      Despite legal protection, Nepal's national parks face pressure from agricultural encroachment, illegal logging, and settlement expansion — particularly along their boundaries. Buffer zones — the areas around national parks where communities live alongside wildlife — are particularly vulnerable. As populations grow and pressure on land increases, maintaining the integrity of protected areas requires constant vigilance.
    </p>

    <h3>Poaching</h3>
    <p>
      Nepal has made extraordinary progress in reducing wildlife poaching through community-based anti-poaching programs. But the financial incentives driving poaching — particularly for tigers, rhinos, and leopards — remain enormous. Vigilance, community engagement, and strong enforcement are essential to maintaining Nepal's impressive gains.
    </p>

    <h3>Tourism Pressure</h3>
    <p>
      Nepal's national parks attract hundreds of thousands of visitors each year — generating vital income but also creating significant waste and disturbance. Poorly managed tourism can cause trail erosion, wildlife disturbance, waste accumulation, and the degradation of the very landscapes that draw visitors. Sustainable, community-benefiting tourism management is essential.
    </p>

    <h3>Infrastructure Development</h3>
    <p>
      Road construction, hydropower projects, and transmission lines increasingly fragment Nepal's protected landscapes, disrupting wildlife corridors and opening previously inaccessible forests to exploitation. Ensuring that infrastructure development avoids or minimizes damage to protected areas requires constant advocacy.
    </p>

    <h2>Why Youth Must Lead the Fight to Protect Nepal's Parks</h2>
    <p>
      Nepal's national parks face threats that will intensify over the coming decades. The decisions made in the next 10–20 years will determine whether Nepal's extraordinary natural heritage survives or is lost forever. Those decisions will be made by — and can be influenced by — today's young people.
    </p>
    <p>
      Youth are important for conservation for several reasons:
    </p>
    <ul>
      <li>They have the longest stake in the outcome — they will live with the consequences for decades</li>
      <li>They bring energy, creativity, and willingness to challenge the status quo</li>
      <li>They are influential within their communities and peer networks</li>
      <li>They represent Nepal's future political, business, and cultural leadership</li>
      <li>They can connect conservation to the values and aspirations of their generation</li>
    </ul>

    <h2>How EHH Nepal Supports Nepal's Protected Areas</h2>
    <ul>
      <li><strong>Education:</strong> Teaching students about Nepal's national parks, their importance, and the threats they face</li>
      <li><strong>Reforestation:</strong> Planting native trees in buffer zones and degraded areas adjacent to protected areas</li>
      <li><strong>Community engagement:</strong> Supporting community-based conservation programs that give local people economic stakes in protecting wildlife</li>
      <li><strong>Anti-poaching awareness:</strong> Educating communities about wildlife laws and the value of living wildlife to local economies</li>
      <li><strong>Advocacy:</strong> Calling for adequate funding and political support for Nepal's protected area system</li>
    </ul>

    <h2>Visit, Experience, Protect</h2>
    <p>
      One of the best things any Nepali student can do for conservation is <strong>visit Nepal's national parks</strong> — through responsible, community-benefiting tourism. When you visit Chitwan and see a rhino in the wild for the first time, or trek through Langtang's rhododendron forests, or spot a rare bird in Koshi Tappu — you understand, in a way no textbook can convey, what is at stake.
    </p>
    <p>
      Nepal's national parks are worth protecting. Every one of us who has stood in awe of a Himalayan sunrise, or heard a tiger's call in the jungle night, or watched a glacier calve — we know this. And knowing it, we have a responsibility to act.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and help protect Nepal's natural heritage for all generations to come.
    </p>
  </BlogArticleLayout>
);

export default NepalNationalParksConservation;
