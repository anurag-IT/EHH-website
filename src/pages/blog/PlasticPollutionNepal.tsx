import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "plastic-pollution-nepal-solutions")!;

const PlasticPollutionNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal's Plastic Problem: A Crisis in Plain Sight</h2>
    <p>
      Walk along the banks of any river in Nepal. Hike a trail in the Himalayas. Visit a market in the Terai. The scene is the same everywhere: plastic. Plastic bags caught in tree branches. Plastic bottles rolling in river currents. Plastic wrappers buried in mountain soil. Nepal's plastic pollution crisis is impossible to ignore — and impossible to justify.
    </p>
    <p>
      Nepal generates approximately <strong>500,000 tonnes of solid waste per year</strong>, with plastic making up an increasingly large share. Despite being a relatively small country, Nepal's plastic pollution has reached its most remote corners — from tourist trekking routes on Everest to the sacred ghats of the Bagmati. And unlike other forms of pollution, plastic does not disappear. It breaks into smaller and smaller pieces — <strong>microplastics</strong> — that contaminate soil, water, and the bodies of every living thing, including humans.
    </p>

    <h2>The Scale of Nepal's Plastic Pollution</h2>
    <ul>
      <li>Nepal produces an estimated <strong>600+ tonnes of plastic waste daily</strong></li>
      <li>Less than <strong>30% of plastic waste</strong> in Nepal is properly collected and disposed of</li>
      <li>The Himalayas — including Everest Base Camp — are littered with decades of accumulated plastic from trekkers, climbers, and local communities</li>
      <li>Nepal's rivers carry significant loads of plastic waste downstream, contributing to plastic pollution in the Ganges and ultimately the Indian Ocean</li>
      <li>Microplastics have been detected in the remote Himalayan lakes and rivers of Nepal — a place once considered pristine</li>
    </ul>

    <h2>Where Does Nepal's Plastic Come From?</h2>

    <h3>Single-Use Plastic: The Biggest Offender</h3>
    <p>
      The majority of Nepal's plastic waste comes from <strong>single-use plastics</strong> — items designed to be used once and thrown away: plastic bags, water bottles, food wrappers, straws, sachets, and disposable cups. These items are cheap, convenient, and ubiquitous — sold at every chiya pasal, vegetable market, and roadside stall across Nepal.
    </p>
    <p>
      Nepal actually banned plastic bags under 40 microns thick in 2019 — but enforcement has been inconsistent, and thin plastic bags remain widely available in many areas.
    </p>

    <h3>Packaging Waste</h3>
    <p>
      As Nepal's consumer economy grows, so does the amount of plastic packaging. Snack wrappers, instant noodle packets, shampoo sachets, mineral water bottles — all contribute to the growing tide of plastic waste. Much of this waste ends up in rivers, on roadsides, or burned in open fires (releasing toxic fumes).
    </p>

    <h3>Tourism Waste</h3>
    <p>
      Nepal receives hundreds of thousands of international tourists each year, with significant numbers trekking in the Himalayas. While tourism brings important economic benefits, it also generates enormous amounts of waste — particularly plastic bottles, food packaging, and single-use items carried on treks. The iconic "Sagarmatha Pollution Control Committee" has worked to address this, but the problem persists.
    </p>

    <h2>Why Plastic is So Dangerous</h2>

    <h3>It Never Really Disappears</h3>
    <p>
      Plastic does not biodegrade — it only breaks into smaller and smaller pieces. A plastic bag thrown away today will still exist, in some form, for <strong>500–1,000 years</strong>. This means that every piece of plastic ever produced still exists somewhere on Earth — and Nepal's rivers, soils, and mountains are accumulating more every single day.
    </p>

    <h3>Microplastics: The Invisible Threat</h3>
    <p>
      As plastic breaks down, it becomes microplastics — tiny particles invisible to the naked eye. These particles contaminate drinking water, soil, and food. Microplastics have been found in human blood, breast milk, lungs, and placentas. The health effects of long-term microplastic exposure are still being studied — but the early signs are deeply concerning.
    </p>

    <h3>Harm to Wildlife</h3>
    <p>
      Nepal's extraordinary wildlife — from river dolphins in the Karnali to birds in Chitwan — regularly ingests plastic or becomes entangled in it. Sea-bound plastic from Nepal's rivers ultimately harms marine wildlife in the Bay of Bengal. Plastic pollution disrupts entire food chains, affecting species at every level.
    </p>

    <h3>Toxic When Burned</h3>
    <p>
      In the absence of proper waste management, many Nepalis burn plastic waste in open fires or small stoves. This releases highly toxic chemicals — dioxins, furans, and carcinogenic compounds — into the air, worsening the <Link to="/blog/air-pollution-kathmandu-nepal">air pollution crisis</Link> and posing severe health risks to nearby communities.
    </p>

    <h2>The Solutions: Building a Plastic-Free Nepal</h2>
    <p>
      The plastic pollution crisis is serious — but it is entirely solvable. The solutions exist. What is needed is the political will, business responsibility, and community action to implement them at scale.
    </p>

    <h3>Reduce: Use Less Plastic</h3>
    <p>
      The most powerful thing individuals and businesses can do is simply use less plastic. This means:
    </p>
    <ul>
      <li>Carrying reusable bags to markets</li>
      <li>Using a reusable water bottle instead of buying plastic bottles</li>
      <li>Choosing products with minimal packaging</li>
      <li>Refusing single-use plastic straws, cutlery, and cups</li>
      <li>Supporting shops and restaurants that offer plastic-free alternatives</li>
    </ul>

    <h3>Replace: Sustainable Alternatives</h3>
    <p>
      Nepal has a rich tradition of natural, sustainable materials — cloth bags (jhola), leaf plates (tapari), clay pots, bamboo containers. These traditional alternatives are making a comeback as awareness grows. Businesses and communities can adopt these materials to eliminate plastic waste at source.
    </p>

    <h3>Collect and Recycle</h3>
    <p>
      Where plastic cannot yet be eliminated, it must be collected and recycled. Nepal's recycling industry is growing, with waste-pickers and recycling cooperatives operating in many cities. Supporting these businesses — by properly sorting and disposing of recyclable plastics — is an important contribution.
    </p>

    <h3>Advocate for Policy Change</h3>
    <p>
      Individual action matters — but systemic change requires policy. Nepal needs:
    </p>
    <ul>
      <li>Strict enforcement of the plastic bag ban</li>
      <li>Extended Producer Responsibility (EPR) laws requiring companies to manage the end-of-life of their plastic packaging</li>
      <li>Investment in waste management infrastructure across all 77 districts</li>
      <li>Incentives for businesses that eliminate single-use plastic</li>
    </ul>

    <h2>How EHH Nepal Is Fighting Plastic Pollution</h2>
    <p>
      EHH Nepal's student volunteers across Nepal are taking direct action against plastic pollution:
    </p>
    <ul>
      <li><strong>Community clean-up drives</strong> — collecting and properly disposing of plastic waste from rivers, public spaces, and communities</li>
      <li><strong>Anti-plastic awareness campaigns</strong> in schools — educating students about the dangers of plastic and alternatives</li>
      <li><strong>Plastic-free school initiatives</strong> — working to eliminate single-use plastic from school canteens and events</li>
      <li><strong>River cleanup events</strong> — working alongside <Link to="/blog/water-pollution-nepal-rivers">river protection efforts</Link> to remove plastic from waterways</li>
      <li><strong>Advocacy</strong> — calling on local and national government to enforce the plastic bag ban and invest in waste infrastructure</li>
    </ul>

    <h2>15 Things You Can Do Today to Reduce Plastic in Nepal</h2>
    <ol>
      <li>Carry a cloth bag (jhola) whenever you shop</li>
      <li>Refill a reusable water bottle instead of buying plastic bottles</li>
      <li>Refuse plastic straws — or carry a reusable bamboo or metal straw</li>
      <li>Buy loose produce without plastic bags at local markets</li>
      <li>Choose products with paper, glass, or metal packaging over plastic</li>
      <li>Bring your own container for takeaway food</li>
      <li>Organize or join a plastic cleanup in your neighbourhood or school</li>
      <li>Separate plastic waste for recycling at home</li>
      <li>Never burn plastic — take it to proper disposal or recycling facilities</li>
      <li>Spread awareness — share this article with friends and family</li>
      <li>Report illegal plastic dumping to local authorities</li>
      <li>Support local businesses that offer plastic-free alternatives</li>
      <li>Use digital payment instead of plastic card readers that print unnecessary receipts</li>
      <li>Advocate for stronger plastic policies at school, local government, and beyond</li>
      <li><strong>Join EHH Nepal</strong> and be part of Nepal's plastic-free movement</li>
    </ol>

    <h2>Nepal Can Be Plastic-Free</h2>
    <p>
      Nepal has everything it needs to solve its plastic problem: a young, passionate population, a tradition of sustainable living, natural alternatives to plastic, and a growing awareness of the crisis. What it needs now is action.
    </p>
    <p>
      EHH Nepal's students across all 77 districts are proving every day that young people are ready to lead that action. One clean-up drive, one awareness campaign, one plastic-free school at a time — we are building the plastic-free Nepal that our country deserves.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and help make Nepal plastic-free.
    </p>
  </BlogArticleLayout>
);

export default PlasticPollutionNepal;
