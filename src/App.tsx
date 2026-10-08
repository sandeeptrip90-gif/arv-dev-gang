import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AwardsSection } from './components/AwardsSection';
import { ProviderMarquee } from './components/ProviderMarquee';
import { PopularProducts } from './components/PopularProducts';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Projects } from './components/Projects';
import { CustomDevSection } from './components/CustomDevSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { Product } from './data/products';
import { Category } from './data/categories';
import { ProjectItem } from './data/projects';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [liveDemoItem, setLiveDemoItem] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  const handleBrowseProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenLiveDemo = (product: Product) => {
    setLiveDemoItem({
      isOpen: true,
      title: product.title,
    });
  };

  const handleProjectLivePreview = (project: ProjectItem) => {
    setLiveDemoItem({
      isOpen: true,
      title: project.title,
    });
  };

  const handleProjectCaseStudy = (project: ProjectItem) => {
    // Open product detail view corresponding to the project
    setIsQuoteOpen(true);
  };

  const handleSelectCategory = (category: Category) => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-600 selection:text-white relative overflow-x-clip">
      
      {/* Floating Navbar */}
      <Navbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="overflow-x-clip">
        {/* Full Viewport Vanguard Hero */}
        <Hero
          onBrowseProducts={handleBrowseProducts}
          onRequestCustomDev={() => setIsQuoteOpen(true)}
        />

        {/* Global Industry Recognition & Editor's Choice Awards */}
        <AwardsSection />

        {/* 20+ Platform APIs & 2,000+ Games Auto-Scrollbar Marquee */}
        <div id="providers">
          <ProviderMarquee />
        </div>

        {/* Section 18: Popular Products Marketplace */}
        <PopularProducts
          onSelectProduct={(product) => setSelectedProduct(product)}
          onRequestQuote={() => setIsQuoteOpen(true)}
        />

        {/* Section 19: Featured Flagship Product */}
        <FeaturedProduct
          onLiveDemo={handleOpenLiveDemo}
          onBuyNow={(product) => setSelectedProduct(product)}
        />

        {/* Section 20: Product Categories with 3D Character Avatars */}
        <Categories
          onSelectCategory={handleSelectCategory}
        />

        {/* Section 21: Why Choose Us Four-Column Pillars */}
        <WhyChooseUs />

        {/* Section 22: Our Projects Portfolio */}
        <Projects
          onLivePreview={handleProjectLivePreview}
          onCaseStudy={handleProjectCaseStudy}
        />

        {/* Section 23: Custom Development Studio Conversion Section */}
        <CustomDevSection
          onBrowseProducts={handleBrowseProducts}
          onRequestQuote={() => setIsQuoteOpen(true)}
        />
      </main>

      {/* Section 24: Luxury Brand Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInstantBuy={(p) => {
          setSelectedProduct(null);
          setIsQuoteOpen(true);
        }}
        onOpenLiveDemo={(p) => {
          setSelectedProduct(null);
          handleOpenLiveDemo(p);
        }}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectCategory={handleSelectCategory}
      />

      <LiveDemoModal
        isOpen={liveDemoItem.isOpen}
        onClose={() => setLiveDemoItem({ isOpen: false, title: '' })}
        productTitle={liveDemoItem.title}
      />

    </div>
  );
};

export default App;
