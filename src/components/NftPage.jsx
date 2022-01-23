import * as React from 'react';
import SourceNft from "./Nft/SourceNft";
import TargetNft from "./Nft/TargetNft";
import "./NftPage.css"

const styles = {
    title: {
      fontSize: "20px",
      fontWeight: "700",
    },
    text: {
      fontSize: "16px",
    },
    card: {
      boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
      border: "1px solid #e7eaf3",
      borderRadius: "0.5rem",
    },
    timeline: {
      marginBottom: "-45px",
    },
  };

export default function NftPage() {
return (
    <div className='rowC'>
            <SourceNft/>
            <TargetNft/>
    </div>

    
    );
}