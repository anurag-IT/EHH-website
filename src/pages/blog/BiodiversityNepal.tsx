import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "biodiversity-nepal-wildlife-conservation")!;

const BiodiversityNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal: One of Earth's Greatest Biodiversity Hotspots</h2>
    <p>
      Covering just 0.1% of the Earth's land surface, Nepal is home to an extraordinary proportion of the world's biodiversity. From the steaming subtropical forests of Chitwan to the frozen alpine zones of the Everest region, Nepal's remarkable range of altitudes — from 60 metres to 8,849 metres above sea level — creates an unparalleled variety of habitats, each hosting unique communities of plants and animals.
    </p>
    <p>
      Nepal hosts <strong>4% of the world's flowering plant species, 8% of the world's bird species, and significant populations of some of the planet's most iconic and endangered mammals</strong> — including the Bengal tiger, one-horned rhinoceros, snow leopard, Gangetic river dolphin, red panda, and clouded leopard. This biodiversity is Nepal's greatest natural treasure — and it is under serious threat.
    </p>

    <h2>Nepal's Extraordinary Wildlife: What We Stand to Lose</h2>

    <h3>Mammals</h3>
    <ul>
      <li><strong>Bengal Tiger (Panthera tigris tigris):</strong> Nepal is one of the tiger conservation success stories of Asia. From just 121 tigers in 2009, Nepal's tiger population grew to over <strong>355 tigers by 2022</strong> — an incredible achievement. Chitwan and Bardia national parks are the strongholds of Nepal's tigers.</li>
      <li><strong>One-Horned Rhinoceros (Rhinoceros unicornis):</strong> Nepal's Terai is one of the last remaining habitats of the greater one-horned rhinoceros. Chitwan National Park alone is home to over <strong>700 rhinos</strong> — a remarkable recovery from near-extinction due to poaching.</li>
      <li><strong>Snow Leopard (Panthera uncia):</strong> Nepal's high-altitude mountains are home to an estimated <strong>300–400 snow leopards</strong> — one of the world's most elusive and endangered big cats. They roam the remote slopes of the Himalayas, Annapurna, and Kanchenjunga regions.</li>
      <li><strong>Red Panda (Ailurus fulgens):</strong> The adorable red panda — Nepal's national animal — lives in the temperate forests of Nepal's mid-hills, from 2,000–4,000 metres altitude. Habitat loss and poaching threaten this vulnerable species.</li>
      <li><strong>Gangetic River Dolphin (Platanista gangetica):</strong> One of the world's most endangered river dolphin species, found in Nepal's Karnali and Narayani rivers. Water pollution and dam construction threaten its survival.</li>
      <li><strong>Elephant (Elephas maximus):</strong> Wild Asian elephants roam the forests of Nepal's Terai, particularly in Chitwan, Bardia, and Shuklaphanta. Human-elephant conflict is a growing challenge as forests shrink.</li>
    </ul>

    <h3>Birds</h3>
    <p>
      Nepal is a <strong>birding paradise</strong>. With over <strong>900 recorded bird species</strong> — more than 8% of all bird species on Earth — Nepal attracts birdwatchers from across the globe. From the endangered Bengal Florican and Giant Hornbill of the Terai to the Himalayan Monal (Nepal's national bird) and Snow Partridge of the high mountains, Nepal's avifauna is staggering in its diversity.
    </p>

    <h3>Reptiles and Amphibians</h3>
    <p>
      Nepal is home to the critically endangered <strong>Gharial crocodile</strong> — found only in a handful of river systems in Nepal and India — as well as the King Cobra, Python, and hundreds of lizard and frog species, many of which are poorly studied and potentially undescribed by science.
    </p>

    <h3>Plants and Forests</h3>
    <p>
      Nepal's forests contain over <strong>7,000 plant species</strong>, including hundreds of medicinal plants that have been used in Ayurvedic and traditional Tibetan medicine for thousands of years. Nepal is also home to 31 species of rhododendron — including the national flower, the Lali Gurans (Rhododendron arboreum) — and extraordinary orchid diversity, with over 400 species recorded.
    </p>

    <h2>What Threatens Nepal's Biodiversity?</h2>

    <h3>Habitat Loss and Deforestation</h3>
    <p>
      The greatest threat to Nepal's wildlife is the destruction of their habitat. As forests are cleared for agriculture, settlement, and infrastructure, animals lose the space they need to survive. Species that require large territories — tigers, elephants, snow leopards — are particularly vulnerable. Read more about this in our article on <Link to="/blog/deforestation-nepal-causes-effects-solutions">deforestation in Nepal</Link>.
    </p>

    <h3>Poaching and Wildlife Trade</h3>
    <p>
      Despite Nepal's strong legal protections and impressive anti-poaching record, illegal wildlife trade remains a threat. Tiger bones, rhino horns, leopard skins, red panda pelts, and exotic birds are all targeted by poachers supplying illegal markets, primarily in China and Southeast Asia. Nepal has worked hard to combat poaching — achieving zero rhino poaching years — but vigilance is essential.
    </p>

    <h3>Human-Wildlife Conflict</h3>
    <p>
      As both human and wildlife populations grow, conflict increases. Tigers and leopards prey on livestock. Elephants raid crops and damage homes. Rhinos injure and occasionally kill farmers working near protected areas. These conflicts — in which both humans and animals suffer — are among the most challenging conservation issues in Nepal, requiring careful management and community engagement.
    </p>

    <h3>Climate Change</h3>
    <p>
      Nepal's changing climate is shifting the habitats that species depend on. High-altitude species like the snow leopard and red panda are being pushed higher as temperatures rise — but eventually, there is no higher to go. Monsoon changes affect the breeding seasons and food availability of countless species. <Link to="/blog/climate-change-nepal-youth-action">Climate change</Link> is a growing threat to Nepal's extraordinary biodiversity.
    </p>

    <h3>Pollution</h3>
    <p>
      <Link to="/blog/water-pollution-nepal-rivers">Water pollution</Link> kills fish and river dolphins. <Link to="/blog/plastic-pollution-nepal-solutions">Plastic pollution</Link> entangles and poisons birds and mammals. Pesticides in agricultural areas contaminate food chains. Every form of pollution takes a toll on Nepal's wildlife.
    </p>

    <h2>Nepal's Conservation Success: Reasons for Hope</h2>
    <p>
      Nepal has achieved some of the world's most impressive wildlife conservation results, demonstrating that with the right policies and community engagement, species can recover from the brink:
    </p>
    <ul>
      <li>Tiger population <strong>nearly tripled</strong> in 13 years through community-based conservation</li>
      <li>Rhino numbers <strong>recovered from under 100</strong> in the 1960s to over 700 today</li>
      <li>Nepal achieved <strong>zero poaching years</strong> for rhinos multiple times</li>
      <li>Community-based conservation programs give local communities direct economic benefits from wildlife — creating incentives to protect rather than poach</li>
      <li>Nepal's network of <strong>national parks, wildlife reserves, and conservation areas</strong> covers nearly 24% of the country's land area</li>
    </ul>

    <h2>How EHH Nepal Protects Biodiversity</h2>
    <p>
      EHH Nepal's work directly supports biodiversity conservation through several channels:
    </p>
    <ul>
      <li><strong>Tree plantation with native species</strong> — restoring natural habitat for wildlife</li>
      <li><strong>Anti-poaching awareness</strong> — educating communities about wildlife laws and the value of living wildlife</li>
      <li><strong>Habitat corridor support</strong> — advocating for the protection of forest corridors connecting Nepal's national parks</li>
      <li><strong>Biodiversity education</strong> — teaching students to identify and appreciate Nepal's extraordinary wildlife</li>
      <li><strong>Community engagement</strong> — supporting community-based conservation initiatives that give local people stakes in protecting wildlife</li>
    </ul>

    <h2>What You Can Do to Protect Nepal's Wildlife</h2>
    <ul>
      <li><strong>Never buy wildlife products</strong> — no tiger bone, rhino horn, leopard skin, or exotic pets</li>
      <li><strong>Report poaching or wildlife trade</strong> to authorities immediately</li>
      <li><strong>Support responsible wildlife tourism</strong> — visit national parks through licensed, community-benefit operators</li>
      <li><strong>Plant native trees</strong> — restore habitat in your community</li>
      <li><strong>Reduce pollution</strong> — less plastic, less chemical use, cleaner rivers</li>
      <li><strong>Learn and teach others</strong> about Nepal's extraordinary biodiversity</li>
      <li><strong>Join EHH Nepal</strong> and be part of the conservation movement</li>
    </ul>

    <h2>Nepal's Wildlife is Our Heritage</h2>
    <p>
      The snow leopard on the high Himalayan ridge, the rhino in the tall Terai grass, the Himalayan Monal gleaming in the morning light — these are not just animals. They are Nepal's heritage. They are proof of what this country's extraordinary landscapes can sustain when given the chance.
    </p>
    <p>
      EHH Nepal fights for them. We fight for the ecosystems they depend on. And we invite every Nepali student to stand with us in protecting the extraordinary natural world that makes Nepal so uniquely, irreplaceably beautiful.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal today</Link>.
    </p>
  </BlogArticleLayout>
);

export default BiodiversityNepal;
