
const MenuTab = () => {
  return (
    <div role="tablist" aria-label="Entertainment">
      <a 
        role="tab"
        aria-selected="true"
        aria-controls="nils-tab"
        id="nils"
      >
        Nils Frahm
      </a>
      <a role="tab"
        aria-selected="false"
        aria-controls="agnes-tab"
        id="agnes"
        tabindex="-1"
      >
        Agnes Obel
      </a>
      <a 
        role="tab"
        aria-selected="false"
        aria-controls="complexcomplex"
        id="complex"
        tabindex="-1"
        data-deletable=""
      >
      Joke
      </a>
    </div>
  );
};

export default MenuTab;
