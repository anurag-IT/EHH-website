import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "air-pollution-kathmandu-nepal")!;

const AirPollutionKathmandu = () => (
  <BlogArticleLayout post={post}>
    <h2>Kathmandu's Air: Beautiful City, Invisible Danger</h2>
    <p>
      Kathmandu Valley is one of the world's most remarkable cities — ancient temples, rich culture, breathtaking mountain views on clear days, and the vibrant energy of Nepal's capital. But Kathmandu carries a less celebrated distinction: it regularly ranks among <strong>the most polluted cities in all of Asia</strong> for air quality.
    </p>
    <p>
      The air that millions of Kathmandu residents breathe every day — and that visitors from around the world inhale when they arrive — frequently contains levels of fine particulate matter (PM2.5) that are <strong>10 to 20 times higher</strong> than the WHO's recommended safe limit. This is not just an environmental issue. It is a public health emergency. And it is one that Nepal's youth — through <strong>EHH Nepal</strong> — are increasingly refusing to accept.
    </p>

    <h2>What is Air Pollution and Why Does It Matter in Nepal?</h2>
    <p>
      Air pollution refers to the presence of harmful substances in the air at concentrations that pose risks to human health and the environment. The most dangerous pollutant in Kathmandu is <strong>PM2.5</strong> — tiny particles less than 2.5 micrometres in diameter that penetrate deep into the lungs and enter the bloodstream. PM2.5 is linked to:
    </p>
    <ul>
      <li>Respiratory diseases (asthma, bronchitis, chronic obstructive pulmonary disease)</li>
      <li>Cardiovascular disease and heart attacks</li>
      <li>Lung cancer</li>
      <li>Premature birth and developmental problems in children</li>
      <li>Reduced cognitive development in children</li>
      <li>Premature death — studies estimate air pollution causes <strong>thousands of premature deaths in Nepal annually</strong></li>
    </ul>

    <h2>What is Causing Air Pollution in Nepal?</h2>
    <p>
      Kathmandu's geography makes it especially vulnerable: the valley is surrounded by hills that trap air, creating a natural bowl that concentrates pollutants. But the sources of those pollutants are man-made — and therefore solvable.
    </p>

    <h3>1. Vehicle Emissions</h3>
    <p>
      Kathmandu has seen an <strong>explosion in the number of vehicles</strong> over the past two decades — motorcycles, cars, microbuses, tempos, and trucks now clog the valley's narrow streets. Many of these vehicles are old and poorly maintained, burning fuel inefficiently and releasing large amounts of black carbon, nitrogen oxides, and particulate matter. Vehicle emissions are widely considered the <strong>single largest source of urban air pollution</strong> in Kathmandu.
    </p>

    <h3>2. Brick Kilns</h3>
    <p>
      Dozens of traditional brick kilns operate around the Kathmandu Valley and in the Terai plains. These kilns — many using old, polluting Bull Trench technology — burn coal and biomass, releasing enormous quantities of black carbon and sulfur dioxide. During the brick-firing season (January–May), air quality in affected areas deteriorates drastically.
    </p>

    <h3>3. Crop and Waste Burning</h3>
    <p>
      After the rice and wheat harvests, farmers across Nepal's Terai plains burn crop residue — releasing smoke that drifts northward into the hills. Illegal open burning of municipal waste is also a major source of toxic air pollution, releasing dioxins, furans, and heavy metals.
    </p>

    <h3>4. Dust from Unpaved Roads and Construction</h3>
    <p>
      Nepal's rapid urban expansion means constant construction — buildings, roads, drainage systems. Construction sites generate enormous amounts of dust, while thousands of kilometres of unpaved roads throughout the country contribute to dust pollution year-round.
    </p>

    <h3>5. Indoor Air Pollution from Cooking Fires</h3>
    <p>
      Beyond urban Kathmandu, indoor air pollution is an even more serious health crisis. Millions of Nepali families — particularly in rural areas — cook over open fires or simple stoves using wood, crop residue, or dung. The smoke fills poorly ventilated homes, exposing women and children (who spend the most time near cooking fires) to extremely high levels of harmful pollutants. <strong>Indoor air pollution kills more Nepalis than outdoor air pollution</strong> in absolute numbers.
    </p>

    <h2>The Health Impact on Nepal's People</h2>
    <p>
      The health consequences of Nepal's air pollution crisis are severe and well-documented:
    </p>
    <ul>
      <li>Respiratory diseases are among the <strong>leading causes of death and disability</strong> in Nepal</li>
      <li>Children in polluted areas show <strong>reduced lung function and cognitive development</strong> compared to those in cleaner environments</li>
      <li>Hospital admissions for respiratory and cardiovascular conditions spike dramatically during high-pollution seasons</li>
      <li>Nepal loses significant economic productivity due to illness and premature death caused by air pollution</li>
      <li>Tourism — a critical source of income for Nepal — is affected when Kathmandu's famous mountain views disappear behind a brown haze</li>
    </ul>

    <h2>What Nepal Is Doing — and What More Is Needed</h2>
    <p>
      Nepal's government has taken some positive steps: the introduction of electric buses on major Kathmandu routes, a ban on old diesel vehicles in Kathmandu Valley, improved fuel standards, and incentives for electric vehicle adoption. Nepal is actually a regional leader in electric vehicle adoption — Kathmandu's streets are increasingly populated by electric three-wheelers and buses.
    </p>
    <p>
      But these measures are not enough on their own. What is needed is a combination of:
    </p>
    <ul>
      <li>Rapid transition of brick kilns to cleaner technology</li>
      <li>Strict enforcement of anti-burning laws</li>
      <li>Expansion of clean cooking energy programs in rural areas</li>
      <li>Green urban spaces and increased tree cover in cities</li>
      <li>Public awareness and education about the health impacts of air pollution</li>
    </ul>

    <h2>How EHH Nepal Is Fighting Air Pollution</h2>
    <p>
      EHH Nepal's approach to air pollution addresses both the causes and the solutions through youth-led action:
    </p>
    <ul>
      <li><strong>Tree plantation:</strong> Urban trees absorb pollutants and particulate matter, improving local air quality. EHH Nepal's tree planting work directly improves air quality in the areas where we plant. See our article on <Link to="/blog/tree-plantation-nepal">tree plantation in Nepal</Link>.</li>
      <li><strong>Anti-burning campaigns:</strong> EHH Nepal educates communities about the health impacts of burning crop residue and waste, advocating for composting and recycling as alternatives.</li>
      <li><strong>Clean energy advocacy:</strong> EHH Nepal advocates for wider adoption of clean cooking energy and supports <Link to="/blog/renewable-energy-nepal-youth-advocacy">renewable energy solutions</Link> in communities.</li>
      <li><strong>School awareness programs:</strong> We run air quality awareness sessions in schools, teaching students about pollution sources, health impacts, and protective actions.</li>
    </ul>

    <h2>What You Can Do About Air Pollution in Nepal</h2>
    <ul>
      <li><strong>Use public transport or cycle</strong> instead of private vehicles wherever possible</li>
      <li><strong>Never burn waste</strong> — take it to proper disposal facilities</li>
      <li><strong>Plant trees</strong> around your home, school, and community</li>
      <li><strong>Advocate for clean energy</strong> in your community — support electric vehicles and clean cookstoves</li>
      <li><strong>Wear an N95 mask</strong> on high-pollution days to protect your lungs</li>
      <li><strong>Check air quality data</strong> — apps like IQAir and AirVisual provide real-time Kathmandu air quality readings</li>
      <li><strong>Join EHH Nepal</strong> and be part of the solution</li>
    </ul>

    <h2>Clean Air is a Human Right</h2>
    <p>
      Every person — whether in Kathmandu or Kailali, Pokhara or Palpa — deserves to breathe clean, safe air. That is not a luxury. It is a fundamental human right. And it is one that EHH Nepal is committed to fighting for.
    </p>
    <p>
      Nepal's air quality problem is serious — but it is not unsolvable. With the right policies, the right technology, and the right level of youth engagement, we can give the next generation of Nepalis the clean air they deserve.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and help build a cleaner, healthier Nepal.
    </p>
  </BlogArticleLayout>
);

export default AirPollutionKathmandu;
