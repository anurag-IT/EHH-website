import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "disaster-preparedness-nepal-youth")!;

const DisasterPreparednessNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal: A Country That Lives With Disaster</h2>
    <p>
      Nepal is one of the world's most disaster-prone countries. Its location at the junction of the Indian and Eurasian tectonic plates makes it highly earthquake-prone. Its monsoon climate and steep terrain make it vulnerable to floods, landslides, and GLOFs (Glacial Lake Outburst Floods). Its dense population in vulnerable areas — river valleys, steep hillsides, flood plains — means that when disaster strikes, the human cost is enormous.
    </p>
    <p>
      Every year, disasters kill hundreds of Nepalis, injure thousands more, and cause billions of rupees in damage to homes, infrastructure, and livelihoods. The <strong>2015 Gorkha Earthquake</strong> killed nearly 9,000 people and destroyed or damaged over 800,000 homes. Annual monsoon floods displace tens of thousands of families in the Terai. Landslides bury entire villages in Nepal's hills without warning.
    </p>
    <p>
      Yet one of the most powerful tools for reducing this death toll — <strong>disaster preparedness</strong> — remains dramatically underdeveloped, particularly in rural and remote communities. This is where Nepal's youth can make a profound and literally life-saving difference.
    </p>

    <h2>Understanding Nepal's Disaster Risks</h2>

    <h3>Earthquakes</h3>
    <p>
      Nepal sits in one of the most seismically active zones on Earth. Major earthquakes — magnitude 7.0 or higher — occur roughly every 75–100 years in Nepal, but smaller earthquakes are constant. The 2015 earthquake was devastating not just because of its magnitude, but because of the poor earthquake resistance of many buildings, the lack of preparedness among communities, and the slow response due to damaged infrastructure.
    </p>
    <p>
      Seismologists warn that several major fault zones in Nepal remain unruptured — meaning future devastating earthquakes are a matter of when, not if. Building earthquake-resilient communities and structures is an existential priority for Nepal.
    </p>

    <h3>Floods and Inundations</h3>
    <p>
      Nepal's monsoon season (June–September) brings intense rainfall that regularly causes the Koshi, Narayani, Karnali, and other major rivers to overflow their banks, flooding vast areas of the Terai. In recent years, <Link to="/blog/climate-change-nepal-youth-action">climate change</Link> has made monsoon flooding more extreme and erratic. Flash floods in mountain districts — often triggered by cloudburst rainfall — can be almost instantaneous and extraordinarily destructive.
    </p>

    <h3>Landslides</h3>
    <p>
      Nepal experiences thousands of landslides every year, particularly during the monsoon season. Landslides are the second most lethal natural hazard in Nepal after floods. <Link to="/blog/deforestation-nepal-causes-effects-solutions">Deforestation</Link> dramatically increases landslide risk by removing the tree roots that hold soil in place. In deforested hillsides, even moderate rainfall can trigger catastrophic slides.
    </p>

    <h3>Glacial Lake Outburst Floods (GLOFs)</h3>
    <p>
      As Nepal's glaciers melt due to <Link to="/blog/climate-change-nepal-youth-action">climate change</Link>, glacial lakes are growing larger and more numerous. When these lakes breach their natural moraine dams — often triggered by ice calving or earthquakes — the resulting flood can travel down mountain valleys at enormous speed and force, destroying everything in its path. GLOFs are becoming more frequent and more severe, threatening communities in mountain river valleys across Nepal.
    </p>

    <h3>Fire</h3>
    <p>
      Both forest fires and building fires are significant disaster risks in Nepal. Forest fires — increasingly frequent due to climate change and dry conditions — destroy habitat, release carbon, and can threaten villages in forested areas. Urban fires in Nepal's dense, poorly planned settlements can spread rapidly and cause devastating losses.
    </p>

    <h2>What is Disaster Preparedness?</h2>
    <p>
      Disaster preparedness means taking actions before a disaster strikes to reduce its impact on human life, property, and livelihoods. Research consistently shows that <strong>every rupee invested in disaster preparedness saves many times more in disaster response and recovery costs</strong> — and more importantly, it saves lives.
    </p>
    <p>
      Disaster preparedness operates at multiple levels:
    </p>
    <ul>
      <li><strong>Individual/household level:</strong> Emergency plans, first aid knowledge, emergency supplies, safe meeting points</li>
      <li><strong>Community level:</strong> Early warning systems, evacuation routes, community rescue teams, safe community shelters</li>
      <li><strong>Institutional level:</strong> Schools and hospitals with earthquake-resistant buildings and evacuation drills</li>
      <li><strong>Government level:</strong> National disaster management systems, search and rescue capacity, post-disaster relief pipelines</li>
    </ul>
    <p>
      Youth have a critical role to play at the individual, household, and community levels — and by advocating for action at the institutional and government levels.
    </p>

    <h2>How EHH Nepal Builds Disaster-Resilient Communities</h2>

    <h3>Community Disaster Preparedness Training</h3>
    <p>
      EHH Nepal trains student volunteers in basic disaster preparedness knowledge and skills — including first aid, search and rescue basics, evacuation procedures, and emergency communication. These trained students then serve as community resources when disaster strikes, and as educators who spread preparedness knowledge in their communities.
    </p>

    <h3>School Safety Programs</h3>
    <p>
      Working with schools across EHH Nepal's district network, we support the development of school disaster management plans, earthquake drills, and emergency first aid training. A school that has practiced its earthquake drill is a school where fewer children will be injured when the earthquake comes.
    </p>

    <h3>Early Warning Awareness</h3>
    <p>
      Many of Nepal's disaster deaths occur because communities do not recognize warning signs or do not know what to do when they appear. EHH Nepal educates communities — particularly in flood-prone and landslide-prone areas — about the warning signs of imminent disaster and the importance of evacuating quickly when those signs appear.
    </p>

    <h3>Post-Disaster Humanitarian Response</h3>
    <p>
      When disasters do strike, EHH Nepal mobilizes rapidly to support affected communities. This humanitarian response includes distributing emergency supplies, helping with clean-up and debris removal, supporting temporary shelter, and providing psychological support to survivors. Read more in our article on <Link to="/blog/humanitarian-aid-nepal-students">humanitarian aid in Nepal</Link>.
    </p>

    <h3>Reforestation as Disaster Prevention</h3>
    <p>
      One of the most powerful long-term disaster preparedness measures is also one of EHH Nepal's core activities: planting trees. Forested hillsides resist landslides. Forest-covered watersheds regulate river flows and reduce flooding. Every tree EHH Nepal plants is a small but real contribution to Nepal's disaster resilience. Read more in our article on <Link to="/blog/tree-plantation-nepal">tree plantation in Nepal</Link>.
    </p>

    <h2>What Every Student Can Do to Prepare for Disasters</h2>

    <h3>At Home</h3>
    <ul>
      <li>Create a family emergency plan — where to meet, who to call, what to do</li>
      <li>Prepare an emergency kit — water, food, first aid supplies, flashlight, important documents</li>
      <li>Know the locations of the nearest medical facility and emergency services</li>
      <li>Learn how to turn off gas, water, and electricity at main switches</li>
      <li>Assess your home's vulnerability — cracked walls, unstable structures, hillside location</li>
    </ul>

    <h3>At School</h3>
    <ul>
      <li>Know your school's earthquake drill procedure — and practice it seriously</li>
      <li>Know where your school's assembly point is in case of evacuation</li>
      <li>Advocate for your school to have a proper disaster management plan</li>
      <li>Take a first aid course — Red Cross Nepal offers basic training across the country</li>
    </ul>

    <h3>In Your Community</h3>
    <ul>
      <li>Talk to elderly community members about past disasters — they have invaluable knowledge about local risks</li>
      <li>Identify vulnerable neighbours who may need help during evacuation — elderly, disabled, families with young children</li>
      <li>Join EHH Nepal's disaster preparedness training programs in your district</li>
      <li>Advocate for local government investment in early warning systems and safe community shelters</li>
    </ul>

    <h2>Prepared Youth Build Resilient Nepal</h2>
    <p>
      Nepal's disaster risk cannot be eliminated. But it can be dramatically reduced. The difference between a disaster that kills ten people and one that kills a hundred is often preparedness — and preparedness is something that young people, with the right knowledge and training, can build in their own communities.
    </p>
    <p>
      EHH Nepal's student volunteers are Nepal's first line of community resilience. When the next earthquake strikes, when the next flood rises, when the next landslide threatens — it will be prepared, trained, connected young people who save lives.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and help build disaster-resilient communities across all 77 districts of Nepal.
    </p>
  </BlogArticleLayout>
);

export default DisasterPreparednessNepal;
