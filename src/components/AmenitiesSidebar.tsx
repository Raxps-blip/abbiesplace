
import { useState } from 'react';
import { ChevronDown, MapPin, Home, Coffee, Flame, Bath, Wifi, Car, TreePine, Fish, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const AmenitiesSidebar = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const activities = [
    { icon: Fish, name: 'Kayaking', description: 'Peaceful water adventures' },
    { icon: Mountain, name: 'Hiking Trails', description: 'Scenic mountain paths' },
    { icon: TreePine, name: 'Nature Walks', description: 'Guided forest exploration' },
    { icon: MapPin, name: 'Local Tours', description: 'Discover hidden gems' }
  ];

  const amenities = [
    { icon: Bath, name: 'Plush Towels', description: 'Luxury comfort' },
    { icon: Flame, name: 'Cozy Fireplace', description: 'Warmth & ambiance' },
    { icon: Coffee, name: 'Coffee Machine', description: 'Perfect morning brew' },
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Stay connected' },
    { icon: Car, name: 'Free Parking', description: 'Convenient access' },
    { icon: Home, name: 'Full Kitchen', description: 'Cook with ease' }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-warm-100 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-4">
            Your Perfect Getaway
          </h2>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            Discover local adventures and in-house comforts
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Local Activities */}
          <Card className="card-shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <Collapsible open={activitiesOpen} onOpenChange={setActivitiesOpen}>
              <CollapsibleTrigger className="w-full p-6 text-left hover:bg-warm-50/50 transition-colors rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-warm-800">Local Activities</h3>
                      <p className="text-warm-600">Explore the great outdoors</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-warm-600 transition-transform duration-300 ${
                      activitiesOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="px-6 pb-6">
                <div className="space-y-4 animate-fade-in">
                  {activities.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-warm-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center group-hover:bg-earth-200 transition-colors">
                        <activity.icon className="w-5 h-5 text-earth-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-warm-800">{activity.name}</h4>
                        <p className="text-sm text-warm-600">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* In-House Amenities */}
          <Card className="card-shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <Collapsible open={amenitiesOpen} onOpenChange={setAmenitiesOpen}>
              <CollapsibleTrigger className="w-full p-6 text-left hover:bg-warm-50/50 transition-colors rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-cream-500 rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-warm-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-warm-800">In-House Amenities</h3>
                      <p className="text-warm-600">Everything you need for comfort</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-warm-600 transition-transform duration-300 ${
                      amenitiesOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4 animate-fade-in">
                  {amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-warm-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center group-hover:bg-cream-200 transition-colors mb-2">
                        <amenity.icon className="w-6 h-6 text-cream-600" />
                      </div>
                      <h4 className="font-semibold text-warm-800 text-sm">{amenity.name}</h4>
                      <p className="text-xs text-warm-600">{amenity.description}</p>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSidebar;
