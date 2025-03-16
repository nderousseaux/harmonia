import Logo from '@/src/ui/components/logo';
import Orb from '@/src/ui/components/lecons/orb';
// Og image for social media sharing
export default function Page() {
  return (
		<div className="flex h-screen p-28 gap-10">
			<div className="w-full flex flex-col items-center justify-center gap-10">
				<Logo className="text-6xl"/>
			</div>
			<div className="flex flex-col items-center justify-center p-12 w-128">
			  <Orb hue={70} forceHoverState={true} hoverIntensity={0.4}/>
			</div>
		</div>
	);
}